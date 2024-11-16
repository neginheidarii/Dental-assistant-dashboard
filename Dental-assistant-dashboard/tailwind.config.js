module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        dark: '#242424',
        light: '#ffffff'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '8px'
      }
    },
  },
  plugins: [],
};
