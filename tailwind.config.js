module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xm: '1230px',
      },
      fontFamily: {
        cursive: ['cursive'],
      },
      colors: {
        faded: '#666',
        dark: '#333',
        theme: '#fffef2',
        themeMedium: '#f6f5e8',
        themeDark: '#252525',
        cartGray: '#bcbbb4',
      },
      spacing: {
        3.7: '0.9375rem',
        4.5: '1.125rem',
        7.5: '1.875rem',
        37: '9.375rem',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
