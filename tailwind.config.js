/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#292952',
        secundary: '#4FAAA8'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        squadaOne: ['Squada One', 'sans-serif'],
      },
      lineHeight: {
        '90': '90%',
      },
  },
  plugins: [],
  }
}
