const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = require('./config')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: config.BABEL_OPTIONS
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin()
        ]
    }
}