const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
module.exports = merge(commonConfig, {
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true // 自动打开浏览器
    }
})