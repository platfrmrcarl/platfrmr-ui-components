/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss,css}', // Include your library's components
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};
