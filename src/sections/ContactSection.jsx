import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api/contact';

const initialForm = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactSection({ profile }) {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));

    if (status.type !== 'idle') {
      setStatus({ type: 'idle', text: '' });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const company = formData.company.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: 'error',
        text: 'Please fill in your name, email, and message before sending.',
      });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({
        type: 'error',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    if (message.length > 2000) {
      setStatus({
        type: 'error',
        text: 'Your message is too long. Please keep it under 2000 characters.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', text: '' });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong while sending your message.');
      }

      setStatus({
        type: 'success',
        text: 'Thanks for reaching out! Your message has been received. I will get back to you soon.',
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        text: error.message || 'Something went wrong while sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container-shell py-16 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s build something great together."
        description="Interested in working together or discussing an opportunity? I&apos;d love to hear from you."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-card p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-sky-300">Reach out</p>
          <h3 className="mt-4 text-2xl font-semibold text-white">Open to software engineering opportunities</h3>

          <div className="mt-6 space-y-4">
            <a href={`mailto:${profile.email}`} className="block rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 transition hover:border-sky-400 hover:text-sky-200">
              <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">Email</span>
              <span className="mt-2 block text-base">{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 transition hover:border-sky-400 hover:text-sky-200">
              <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">LinkedIn</span>
              <span className="mt-2 block text-base">linkedin.com/in/swati-mestri</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="block rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-200 transition hover:border-sky-400 hover:text-sky-200">
              <span className="block text-xs uppercase tracking-[0.18em] text-slate-400">GitHub</span>
              <span className="mt-2 block text-base">github.com/swatimestri</span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-200">Company / Organization</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              placeholder="Your company or team"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              placeholder="Tell me about the opportunity or project..."
            />
          </div>

          {status.text ? (
            <p
              className={`mt-5 text-sm ${status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
              aria-live="polite"
            >
              {status.text}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-4">
            <button type="submit" className="primary-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : status.type === 'success' ? 'Message Sent ✓' : 'Get In Touch'}
            </button>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="secondary-button">
              Download Resume
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
