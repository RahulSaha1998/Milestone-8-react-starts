/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#159635",

          "secondary": "#ce5d4e",

          "accent": "#9fa7f4",

          "neutral": "#3D2640",

          "base-100": "#ECEAF1",

          "info": "#A3B1EB",

          "success": "#16C079",

          "warning": "#EFC757",

          "error": "#F07D70",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
