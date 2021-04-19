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
      },
      spacing: {
        3.7: '0.9375rem',
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
