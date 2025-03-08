/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./themes/main/layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      display: ['group-hover'],
      colors: {
        primary: '#2F45FF',
        secondary: '#ffed4a',
        dark: '#2d3748',
        light: '#f7fafc'
      },
      fontFamily: {
        sans: ['Cerebri Sans', ...defaultTheme.fontFamily.sans],
        heading: ['Cerebri Sans', 'sans-serif'],
        cerebri: ['Cerebri Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
