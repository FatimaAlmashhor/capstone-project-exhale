// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['Nunito',  ...defaultTheme.fontFamily.sans] ,
      },
      animation: {
        'bounce' : 'bounce 1s finite' ,
      }
    },
  },
  variants: {},
  plugins: [],
}