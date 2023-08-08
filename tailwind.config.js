/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        themeBlack: '#1B1B1B',
        themeBlue: '#1C5AF6', // for primary buttons
        themeLightBlue: '#88A7F5',
        themeOrange: '#EF8C44', // for tertiary button
        themeLightOrange: '#EFAF49',
        themeLightGray: '#F0F0F0',
        themeWhite: '#FFFFFF', // for secondary button
      },
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
        MyFont: ['"My Font"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      },
      fontSize: {
        btnText: '16px',
      },
    },
  },
  plugins: [],
};
