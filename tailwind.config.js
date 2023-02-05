/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fefbfa",
      },
      backgroundImage: {
        "banner-pattern": "url('./images/banner-pattern.jpg')",
        "banner-invitation": "url('./images/banner-invitation.jpg')",
        "banner-flower": "url('./images/banner-flower.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0",
          lg: "0",
          xl: "0",
          "2xl": "0",
        },
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
      fontFamily: {
        sans: ["Cormorant", ...defaultTheme.fontFamily.sans],
        "Fjalla-One": ['"Fjalla One"', "sans-serif"],
        "Petit-Formal-Script": ['"Petit Formal Script"', "cursive"],
        Italiana: ['"Italiana"', "serif"],
      },
    },
  },
  plugins: [],
};
