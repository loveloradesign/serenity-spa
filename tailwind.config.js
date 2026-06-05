/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#7B9EB8', 50: '#F0F5F8', 100: '#D3E2EC', 200: '#B6CFE0', 300: '#99BCD4', 400: '#7CA9C8', 500: '#7B9EB8', 600: '#628299', 700: '#49667A', 800: '#304A5B', 900: '#172E3C' },
        accent: { DEFAULT: '#C9A9A9', 50: '#F8F2F2', 100: '#EDDCDC', 200: '#E2C6C6', 300: '#D7B0B0', 400: '#CC9A9A', 500: '#C9A9A9', 600: '#AD8A8A', 700: '#916B6B', 800: '#754C4C', 900: '#592D2D' },
        surface: '#F8F6F2',
        card: '#FFFFFF',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
