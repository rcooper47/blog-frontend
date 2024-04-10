/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        futura: ["Futura", "sans-serif"],
      },
      colors: {
        blue: {
          1: "#219C90"
        },
        gold: {
          1: "#E9B824"
        },
        orange: {
          1: "#EE9322"
        },
        red: {
          1: "#D83F31"
        },
      }
    },
  },
  plugins: [],
}