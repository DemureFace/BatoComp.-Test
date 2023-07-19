/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#754ef9",
        bg: "#fdfdfd",
        text: "#333",
        shadow: "rgba(0,0,0, .2)",
      },
      boxShadow: {
        social: "0 .2rem .5rem rgba(0,0,0, .2)",
      },
    },
  },
  plugins: [],
};
