//const iconblender = require('postcss-icon-blender')

module.exports = {
  plugins: [
    require('postcss-icon-blender'),
    require('autoprefixer'),
    require('tailwindcss')
  ]
  /*plugins: {
    iconblender: {},
    tailwindcss: {},
    autoprefixer: {},
  },*/
}
