/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3e8',
          100: '#cce7d1',
          200: '#99cfb0',
          300: '#66b88b',
          400: '#33a064',
          500: '#1a9d31',
          600: '#008A1B',
          700: '#006e15',
          800: '#005310',
          900: '#00370a',
        }
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
