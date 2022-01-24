module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat'],
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
        ash: '#909090',
      },
      borderRadius: {
        large: '6rem',
      },
      maxHeight: {
        image: '37.5rem',
      },
      minHeight: {
        empty: '22.79rem',
      },
      screens: {
        xs: '425px',
      },
      fontSize: {
        tiny: '0.5rem',
      },
    },
  },
  plugins: [],
}
