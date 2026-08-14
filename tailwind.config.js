/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        dark: {
          DEFAULT: '#000000',
          100: '#0a0a0a',
          200: '#141414',
          300: '#1a1a1a',
          400: '#222222',
          500: '#2a2a2a',
          600: '#333333',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow-orange': '0 0 40px rgba(249, 115, 22, 0.15)',
        'glow-orange-lg': '0 0 60px rgba(249, 115, 22, 0.25)',
      }
    },
  },
  plugins: [],
}