const { defineConfig } = require('@vue/cli-service')
const nodeExternals = require('webpack-node-externals')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'test') {
      config.externals = [nodeExternals()]
      config.devtool = 'inline-cheap-module-source-map'
    }
  }
})
