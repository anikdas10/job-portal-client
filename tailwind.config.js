/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "390px",
      md: "580px",
      lg: "800px",
      xl: "1180px",
      '2xl':"1490px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

