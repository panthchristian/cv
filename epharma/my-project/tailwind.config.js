
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
