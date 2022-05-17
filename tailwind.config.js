module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl' : '0 35px 68px 0 $purple, inset 0 -8px 16px 0 $pink'
      }
    },
    colors: {
      'my-pink': '#F8A4D8',
      'my-purple': '#6C63FF',
      'my-white': '#f8fafc',
      'my-text-color': '#334155'
    },
  },
  plugins: [],
}
