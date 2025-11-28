/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        comic: ["Bangers", "cursive"],
        body: ["Comic Neue", "cursive"],
      },
      colors: {
        "comic-yellow": "#FACC15",
        "comic-blue": "#3B82F6",
        "comic-red": "#EF4444",
        "comic-purple": "#A855F7",
        "comic-green": "#22C55E",
        paper: "#FFFDF5",
      },
      boxShadow: {
        hard: "5px 5px 0px rgba(0,0,0,1)",
        "hard-lg": "10px 10px 0px rgba(0,0,0,1)",
        "hard-xl": "15px 15px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
