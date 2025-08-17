/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media'
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
          DEFAULT: '#172554', // blue 950
          dark: 'skyblue', // dark mode color
          light: 'navy', // navy
        },
      }
    },
  },
  plugins: [],
}

