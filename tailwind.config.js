/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
   
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'tb': '#1C9D9F',
      
    },

    fontFamily: {
      signature: ["Great Vibes"],
      'mal':["'Noto Serif Malayalam', serif"],
      'eng':["'Raleway', sans-serif"],
      
    },
   
  },
  plugins: [require('tailwindcss-font-inter')({ 
    a: -0.0223,
    b: 0.185,
    c: -0.1745,
    baseFontSize: 16,
    importFontFace: true,
  }),
  require('tailwindcss'),
  require('autoprefixer')

],
}