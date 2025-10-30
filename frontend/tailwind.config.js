import colors from 'tailwindcss/colors'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // ✅ Esto ya cubre App.jsx, main.jsx, etc.
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        primary: {
          50: "#F9FAFB",
          500: "#10B981",
          900: "#064E3B",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
