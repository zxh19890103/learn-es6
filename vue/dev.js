const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config')
config.devtool = 'inline-source-map'

const compiler = webpack(config)

const server = new webpackDevServer(compiler, {
    historyApiFallback: true,
    contentBase: [ './dist', './assets' ],
    stats: {
        colors: true
    }
})
server.listen(9001, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:9001')
})