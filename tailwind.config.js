/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c",
        secondary: "#1f2937",
      },
      boxShadow: {
        'brutalist': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutalist-orange': '8px 8px 0px 0px rgba(234,88,12,1)',
        'brutalist-small': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutalist-orange-small': '4px 4px 0px 0px rgba(234,88,12,1)',
      }
    },
  },
  plugins: [],
}
