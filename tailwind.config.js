/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-pattern": "url('./images/banner-pattern.jpg')",
        "banner-invitation": "url('./images/banner-invitation.jpg')",
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
      },
      fontFamily: {
        sans: ["Cormorant", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
