const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
// ????
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: ["last 2 versions", "safari >= 7"]
                                    }
                                }
                            ]
                        ],
                        plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            title: 'Vue Learning',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendor",
                  chunks: "all"
                }
            }
        },
        runtimeChunk: {
            name: 'runtime'
        }
    }
}