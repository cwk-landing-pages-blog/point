/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/[lang]/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        wiggle: 'wiggle 1s ease-in infinite',
      },
    },
  },
};
