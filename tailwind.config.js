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
        "banner-home": "url('./images/home_hero.jpg')",
        "banner-testimonial": "url('./images/bg-testimonial.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "0",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
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
        "Alex-Brush": ['"Alex Brush"', "cursive"],
        "Playfair-Display": ['"Playfair Display"', "serif"],
        Oswald: ['"Oswald"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
