module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        twitter: '#00ADED',
      },
    },
  },
  plugins: [],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}
