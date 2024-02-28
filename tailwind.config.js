/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,tsx,jsx}'],
  theme: {
    extend: {
      colors: {
        mnafiu: '#fffff',
      },
      spaces: {},
      fontFamily: {},
      shadow: {},
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};

