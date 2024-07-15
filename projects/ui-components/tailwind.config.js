/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,scss,css}', // Include your library's components
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto Flex'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#43b600',
          secondary: '#ff6600',
          accent: '#00ffff',
          neutral: '#ffffff',
          'base-100': '#3a3a3a',
          info: '#0000ff',
          success: '#00ff00',
          warning: '#00ff00',
          error: '#ff0000',
        },
      },
      'dark',
      'cupcake',
    ],
  },
  plugins: [require('typography'), require('daisyui')],
};
