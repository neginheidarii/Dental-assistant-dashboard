module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#646cff",
        dark: "#242424",
        light: "#ffffff",
        accent1: "#38bdf8", // Sky Blue
        accent2: "#f87171", // Soft Red
        accent3: "#facc15", // Amber Yellow
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [require("daisyui")],
};
