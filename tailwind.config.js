// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        'sans-serif': ['El Messiri', 'Cairo'],
        serif: ['Scheherazade', 'Markazi Text'],
      },
      animation: {
        bounce: 'bounce 1s finite',
      },
      width: {
        70: '20rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
