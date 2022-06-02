module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      backgroundImage:{
        'text-bg':"url('../public/img/homeimg.gif')"
      }
    },
  },
  plugins: [],
}
