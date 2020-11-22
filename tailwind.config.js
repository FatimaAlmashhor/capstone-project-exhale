// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        Tajawal: 'sans-serif',
      },
      animation: {
        bounce: 'bounce 1s finite',
      },
      width: {
        70: '20rem',
      },
      colors: {
        background: {
          primary: 'var(--bg-background-primary)',
          secondary: 'var(--bg-background-secondary)',
          tertiary: 'var(--bg-background-tertiary)',
          pinck: 'var(--bg-background-pinck)',
        },

        textColor: {
          primary: 'var(--text-textColor-primary)',
          secondary: 'var(--text-textColor-secondary)',
        },

        'border-color': {
          primary: 'var(--border-border-color-primary)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
