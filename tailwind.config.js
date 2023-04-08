/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lm: {
          primary: {
            100: colors.slate[500],
            200: colors.slate[600],
            300: colors.slate[800],
            400: colors.slate[900],
            500: colors.slate[950],
            contr: colors.gray[50]
          },
        },
        dm: {
          primary: {
            100: colors.white,
            200: colors.slate[50],
            300: colors.slate[50],
            400: colors.violet[300],
            500: colors.violet[400],
            contr: colors.gray[950]
          },
        }
      }
    },
  },
  plugins: [],
}

