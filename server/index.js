import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import initSqlJs from 'sql.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const allowedOrigins = (process.env.CORS_ORIGIN || process.env.FRONTEND_URL || 'http://localhost:5173,http://localhost:5178')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const isLocalFrontendOrigin = (origin) => /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0):\d+$/.test(origin || '');

const dbDirectory = path.resolve(process.cwd(), 'server', 'data');
const dbFilePath = path.join(dbDirectory, 'contact_messages.db');

fs.mkdirSync(dbDirectory, { recursive: true });

const requestTimestamps = new Map();

const sanitizeText = (value, maxLength = 2500) => {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, maxLength);
};

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());

const ensureDatabase = async () => {
  const SQL = await initSqlJs();
  const db = new SQL.Database();

  db.run(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  fs.writeFileSync(dbFilePath, Buffer.from(db.export()));
  return db;
};

let database;

const saveDatabase = () => {
  if (!database) return;
  const data = database.export();
  fs.writeFileSync(dbFilePath, Buffer.from(data));
};

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin) || isLocalFrontendOrigin(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error('Origin not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  })
);

app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'API is running.' });
});

app.post('/api/contact', (req, res) => {
  if (!database) {
    return res.status(503).json({ success: false, message: 'Database is not ready yet. Please try again in a moment.' });
  }

  const clientKey = req.ip || req.headers['x-forwarded-for'] || 'unknown-client';
  const currentTime = Date.now();
  const previousRequest = requestTimestamps.get(clientKey) || 0;

  if (currentTime - previousRequest < 15000) {
    return res.status(429).json({ success: false, message: 'Please wait a moment before sending another message.' });
  }

  requestTimestamps.set(clientKey, currentTime);

  const rawName = req.body?.name;
  const rawEmail = req.body?.email;
  const rawCompany = req.body?.company;
  const rawMessage = req.body?.message;

  const name = sanitizeText(rawName, 100);
  const email = sanitizeText(rawEmail, 255).toLowerCase();
  const company = sanitizeText(rawCompany, 255);
  const message = sanitizeText(rawMessage, 2000);

  if (!name) {
    return res.status(400).json({ success: false, message: 'Name is required.' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  if (!message) {
    return res.status(400).json({ success: false, message: 'Message is required.' });
  }

  try {
    database.run(
      'INSERT INTO contact_messages (name, email, company, message, created_at) VALUES (?, ?, ?, ?, datetime("now"))',
      [name, email, company || '', message]
    );

    saveDatabase();

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while saving your message. Please try again.',
    });
  }
});

app.use((error, req, res, next) => {
  if (error && error.message === 'Origin not allowed by CORS') {
    return res.status(403).json({ success: false, message: 'CORS policy blocked this request.' });
  }
  next(error);
});

const startServer = async () => {
  try {
    database = await ensureDatabase();
    app.listen(port, () => {
      console.log(`Contact API running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to initialize contact database:', error);
    process.exit(1);
  }
};

startServer();
