module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
        title: ['Gwendolyn'],
      },
      colors: {
        sand: {
          100: '#FFFFFF',
          200: '#FFFCF1',
        },
        coral: '#FDDACF',
        peach: { 100: '#F78E72', 200: '#F9744E' },
        green: '#1E8079',
      },
      borderRadius: {
        large: '6rem',
      },
    },
  },
  plugins: [],
}
