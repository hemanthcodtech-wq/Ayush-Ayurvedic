/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Quicksand', 'system-ui', 'sans-serif'],
        serif: ['Zen Antique', 'Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#14542B',
          dark: '#0b351a',
          light: '#237841',
          subtle: '#ebf5ee',
        },
        gold: {
          DEFAULT: '#c59d5f',
          light: '#e6c994',
          dark: '#9e7534',
        },
        sand: '#FAF7F2',
        cream: '#FFFDF9',
      },
      animation: {
        fadeIn: 'fadeIn 0.35s ease-out',
        pulseGold: 'pulseGold 2s infinite',
        floatSlow: 'floatSlow 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(197,157,95,0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(197,157,95,0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
