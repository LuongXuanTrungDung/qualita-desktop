/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.njk', './src/*.njk'],
  theme: {
    colors: {
      primary: '#00BFFF',
      secondary: '#3252FB',
      fade: '#F0F8FF',
      shade: '#030303',
      info: '#C238B2',
      success: '#00B25E',
      warning: '#EACD00',
      alert: '#FC0013'
    },
    extend: {},
  },
  plugins: [],
}

