import('tailwindcss').Config 
module.exports = {
  content: [
    "./src/**/*.tsx",
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
    screens: {
      'xs': '0px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',    
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
