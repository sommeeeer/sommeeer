/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        magicpurple: {
          100: '#fbf5ff',
          200: '#9075a6',
          300: '#b26ee8',
          400: '#251531',
        },
      },
    },
  },
  plugins: [],
};
