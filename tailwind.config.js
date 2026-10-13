/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7dd3fc',
        secondary: '#c4b5fd',
        dark: '#07111f',
        panel: '#0f172a',
        soft: '#111827',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.25), 0 30px 60px rgba(15, 23, 42, 0.45)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
