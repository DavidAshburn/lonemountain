const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      backgroundSize: {
        'oversize': '400%',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        'aboreto': ['Aboreto', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'josefin': ['Josefin Slab', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
