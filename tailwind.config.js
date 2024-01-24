/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        roboto: "Roboto",
        babuas: "Bebas Neue",
        abel: "Abel",
      },
      screens: {
        sm: "530px",
        xm: "677px",
        md: "925px",
        lg: "1010px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
