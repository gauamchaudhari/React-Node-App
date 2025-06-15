/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: "#3E97FF",
       "primary-dark": "#1e75d8",
        gray: {
          100: '#f9fafb',
          800: '#1f2937',
        },
      }
    },
  },
  fontFamily: {
  sans: ['Inter', 'sans-serif'],
},

  plugins: [],
}

