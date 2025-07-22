/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'header-blue': 'rgb(24, 141, 190)',
        'light-blue': 'rgb(147, 165, 200)',
        'dark-blue': 'rgb(60, 27, 146)',
        'footer-blue': '#4f91ce',
      }
    }
  },
  plugins: [],
}