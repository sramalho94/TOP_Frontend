/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        themeBlue: "#1C5AF6", // for primary buttons
        themeLightBlue: "#88A7F5",
        themeOrange: "#EF8C44", // for tertiary button
        themeLightOrange: "#EFAF49",
        themeWhite: "#F0F0F0", // for secondary button
      }
    }
  },
  plugins: [],
};
