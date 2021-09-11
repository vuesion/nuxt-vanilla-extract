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
  //
  // this.extendBuild((config, { isClient, isServer }) => {
  //   if (config.resolve?.extensions?.includes('.ts') === false) {
  //     config.resolve.extensions.push('.ts')
  //   }
  // })

  this.options.build?.plugins?.push(new VanillaExtractPlugin(options))

  if (!this.options.build?.babel?.plugins) {
    this.options.build.babel = {
      ...this.options.build.babel,
      plugins: []
    }
  }

  this.options.build?.babel?.plugins?.push('@vanilla-extract/babel-plugin')
}

module.exports.meta = require('../package.json')
