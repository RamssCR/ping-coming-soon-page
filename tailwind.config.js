/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        blueishViolet: 'hsl(223, 87%, 63%)'
      },
      fontFamily: {
        body: ["'Libre Franklin'", "sans-serif"]
      },
      gridTemplateColumns: {
        '3/4': '6fr 3fr'
      },
      maxWidth: {
        '128': '42em'
      },
      fontSize: {
        '4xl': '3em'
      }
    },
  },
  plugins: [],
}

