const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.config')

config.mode = 'production'
config.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash].css',
    chunkFilename: "[id].[chunkhash].css"
  })
)
// for production extract css.
const cssLoaderUse = config.module.rules[3]
cssLoaderUse.use[0] = MiniCssExtractPlugin.loader

webpack(config, function(err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
})