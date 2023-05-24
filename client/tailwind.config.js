/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'headerColor': '#494747',
      'roseColor': '#E26F6F',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

