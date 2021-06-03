const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      white: colors.white
    },
    extend: {
      screens: {
        'xs': '320px',
        's': '420px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
