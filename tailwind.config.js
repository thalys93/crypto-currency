/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'K2D': ['K2D, sans-serif'],
      'Jost': ['Jost, sans-serif'],
      'Poppins': ['Poppins, sans-serif'],
    },
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      colors: {
        primaryV: "#161831",
        secondaryV: "#3A1C92",
        tertiaryV: "#EFC7FB",
      }
    },
  },
  plugins: [
      // eslint-disable-next-line no-undef
    require('@tailwindcss/typography'),
  ],
}
