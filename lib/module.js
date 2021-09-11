// const { resolve } = require('path')
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options['nuxt-vanilla-extract'],
    ...moduleOptions
  }

  // this.addPlugin({
  //   src: resolve(__dirname, 'plugin.js'),
  //   fileName: 'nuxt-vanilla-extract.js',
  //   options
  // })

  this.options.build?.plugins?.push(new VanillaExtractPlugin(options))
  this.options.babel?.plugins?.push('@vanilla-extract/babel-plugin')
}

module.exports.meta = require('../package.json')
