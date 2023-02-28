const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    resolveLoader: {
        modules: ['node_modules', './loaders']
    },
    module: {
        rules: [
            {
                test: /\.jpg/,
                type: 'asset/resource',
                // type: 'asset/inline' // 图片转成base64
                generator: {
                    filename: 'static/images/[hash][ext][query]'
                }
            },
            {
                test: /\.(ttf|woff|woff2)/,
                type: 'asset/inline'
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                },{
                    loader: 'replaceLoader',
                    options: {
                        name: 'hi'
                    }
                }],
                include: path.join(__dirname, 'src'),//包含哪些目录做babel转译
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),//包含哪些目录做babel转译
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ],
    performance: false,
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    }
}