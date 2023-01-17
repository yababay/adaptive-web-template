/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,pug}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
