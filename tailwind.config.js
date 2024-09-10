/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        
        dark: {
          primary: '#313033', // Cor primária para o tema dark
          secondary: '#9FA2B2', // Cor secundária para o tema dark
          button: "white",
        },
        light: {
          primary: '#ffffff', // Cor primária para o tema light
          secondary: '#000000', // Cor secundária para o tema light
          footer: "#28211D",
          button: "#7F56D9",
        },
      
      },
      textColor: {
        dark: '#ffffff', // Cor do texto para o tema dark
        light: '#000000', // Cor do texto para o tema light
        buttonDark: "ffffff",
        buttonLight: "7F56D9",
        seguirDark: "#000000",
        seguirLight: "#ffffff",

        
      },
      
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        dotGothic: ["DotGothic16", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};