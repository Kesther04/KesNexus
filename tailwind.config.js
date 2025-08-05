/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        hero : "url(/images/hero.jpg)"
      }
    },
  },
  plugins: [],
}

