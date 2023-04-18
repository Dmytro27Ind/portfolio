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
      fontFamily: {
        inter: ['Inter', 'Lato', 'system-ui', 'sans-serif'],
        nunito: ['Nunito', 'Inter', 'Lato', 'system-ui'],
      },
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
          primaryText: colors.gray[950],
          secondaryText: colors.gray[500],
        },
        dm: {
          primary: {
            100: colors.white,
            200: colors.slate[50],
            300: colors.slate[50],
            400: colors.slate[300],
            500: colors.slate[400],
            contr: colors.gray[950]
          },
          primaryText: colors.gray[50],
          secondaryText: colors.gray[300],
          bg: {
            100: colors.zinc[700],
            200: colors.zinc[800],
            300: colors.zinc[900],
          }
        }
      },
      height: {
        'v-90': '90vh',
        'v-70': '70vh',
      }
    },
  },
  plugins: [],
}

