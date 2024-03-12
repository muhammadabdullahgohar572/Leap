/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      screens: {
        'mom': '320px',
   
      },
    },
  },
  plugins: [],
}