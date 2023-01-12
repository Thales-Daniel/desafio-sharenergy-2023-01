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
        "border-gray": "#E2E2E2"
      }
    },
  },
  plugins: [],
}
