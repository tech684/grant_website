/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          plum: "#ec4899",
          plumLight: "#f472b6",
          plumDark: "#be185d",
          gold: "#FFDBDE",
          goldLight: "#FCF0F1",
          black: "#3E2723",
          sand: "#FCF0F1",
          surface: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
        heading: ['"Outfit"', "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 40px -10px rgba(74, 14, 78, 0.1)",
        "premium-hover": "0 30px 60px -15px rgba(74, 14, 78, 0.15)",
      },
    },
  },
  plugins: [],
};
