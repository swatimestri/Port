/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#050816',
        surface: '#0C1425',
        'surface-raised': '#121C34',
        accent: '#38BDF8',
        'accent-violet': '#818CF8',
        'text-primary': '#F4F6FC',
        'text-secondary': '#A4AEC0',
        'text-muted': '#64748B',
        primary: '#38BDF8',
        secondary: '#818CF8',
        dark: '#050816',
        panel: '#0C1425',
      },
      borderColor: {
        subtle: 'rgba(145, 174, 215, 0.16)',
        vibrant: 'rgba(56, 189, 248, 0.40)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(56, 189, 248, 0.2), 0 20px 40px rgba(5, 8, 22, 0.7)',
        ambient: '0 0 35px -5px rgba(56, 189, 248, 0.2)',
        card: '0 12px 32px -10px rgba(0, 0, 0, 0.65)',
      },
      fontFamily: {
        sans: ['"Manrope"', '"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Manrope"', '"Space Grotesk"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', '"DM Serif Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"DM Serif Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
