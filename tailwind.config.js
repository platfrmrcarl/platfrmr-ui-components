/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './projects/ui-components/**/*.{html,ts,css,scss}',
    './**/*.{html,ts,css,scss}', // optional
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        platfrmr: {
          "primary": "#43b600",
          "secondary": "#ff6600",
          "accent": "#00ffff",
          "neutral": "#3a3a3a",
          "base-100": "#2b2b2b",
          "info": "#0000ff",
          "success": "#43b600",
          "warning": "#ff6600",
          "error": "#ff0000",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require("daisyui")]
};