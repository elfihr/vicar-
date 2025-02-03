/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        red01: "#BE3144"
      },
      fontFamily:{
        allura:["Allura", "serif"]
      }
    },
  },
  plugins: [],
}