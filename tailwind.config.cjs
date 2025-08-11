module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        exmadeRed: "#ff1a1a",
        exmadeDeep: "#1a0000",
        exmadeGlass: "rgba(26,0,0,0.35)"
      },
      boxShadow: {
        'neon-red': '0 0 20px rgba(255, 26, 26, 0.9)',
        'neon-red-soft': '0 0 12px rgba(255, 26, 26, 0.7)'
      }
    }
  },
  plugins: []
}
