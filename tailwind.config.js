
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          950: '#050505',
          900: '#0a0a0b',
          800: '#121214',
          700: '#1a1a1d',
        },
        ember: {
          600: '#a6851d',
          500: '#c9a227',
          400: '#d4b43a',
          300: '#e0c54d',
        },
        ash: {
          500: '#6b7280',
          400: '#9ca3af',
          300: '#d1d5db',
          200: '#e5e7eb',
        }
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        }
      }
    }
  },
  plugins: [],
}
