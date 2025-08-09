/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','./src/index.css'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        hero : "url(/images/hero.jpg)"
      },
      colors: {
        primary: {
          DEFAULT: 'navy',
          hover: 'lightblue',
        },
      }
    },
  },
  plugins: [],
}

