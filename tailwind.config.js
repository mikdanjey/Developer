/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    variants: {
      extend: {
        animation: ['animate-spin', 'animate-bounce'],
      },
    },
  },
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
