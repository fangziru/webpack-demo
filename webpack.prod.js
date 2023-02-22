const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
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
        new MiniCssExtractPlugin({
            filename: 'build.css'
        })
    ]
}