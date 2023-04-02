import('tailwindcss').Config 
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'onyx': '#393E41',
      'timberwolf': '#D3D0CB',
      'old-gold': '#E2C044',
      'myrtle-green': '#587B7F',
      'eerie-black': '#1E2019',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
