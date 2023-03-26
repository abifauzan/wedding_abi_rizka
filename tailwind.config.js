/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#fefbfa",
        primary: "#F38BA0",
      },
      backgroundImage: {
        "banner-invitation": "url('./images/banner-invitation.jpg')",
        "banner-testimonial": "url('./images/bg-testimonial.jpg')",
        "banner-footer-desktop": "url('./images/bg-footer-desktop.jpg')",
        "banner-footer-mobile": "url('./images/bg-footer-mobile.jpg')",
        "banner-menu": "url('./images/bg-menu.jpg')",
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
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans],
        script: ['"Alex Brush"', "cursive"],
        heading: ['"Gilda Display"', "serif"],
        playFair: ['"Playfair Display"', "serif"],
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
      cursor: {
        plus: "url('./images/icons8-plus-50.png'), pointer",
        "zoom-out": "url('./images/icons8-zoom-out-64.png'), pointer",
      },
    },
  },
  plugins: [],
};
