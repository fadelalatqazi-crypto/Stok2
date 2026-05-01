/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#2196F3" },
      fontFamily: { sans: ["Roboto", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
