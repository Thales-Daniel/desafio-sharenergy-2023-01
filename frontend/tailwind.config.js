/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#00A1A2",
        "light-yellow": "#D6DE28",
        "strong-blue": "#161C2D",
        "semi-white": "#F8F8F8",
        "border-gray": "#E2E2E2",
        "black-not-strong": "#343338",
      },
      screens: {
        'sm': {'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px'},
  
        'lg2': {'max': '1024px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
        'xl': { 'max': '1200px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
        '2xl': {'min': '1536px'},
      }
    },

  },
  plugins: [],
}
