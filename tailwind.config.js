/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '&::-webkit-scrollbar': { display: 'none' }, /* Chrome, Safari */
          '-ms-overflow-style': 'none', /* IE & Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
      });
    }),
  ],
}