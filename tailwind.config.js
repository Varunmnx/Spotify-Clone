/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'side-bar':'#b3b3b3',
        'spotify-top':'#121212',
        'page1-content':"#2a2a2a"
      }
    },
  },
  plugins: [],
}