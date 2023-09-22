/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f1f5f9',
        },
        secondary: {
          DEFAULT: '#fcc300',
        },
        tertiary: {
          DEFAULT: '#17c7be',
        },
      },
      fontFamily: {
        title: ['Open Sans'],
        body: ['Roboto'],
      },
      borderRadius: {
        '4xl': '3.5rem',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      transform: ['active'],
    },
  },
  plugins: [],
};
