/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "labzone-red": "#e30613",
        "dark": "#111517",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        monserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
}
