const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true // 自动打开浏览器
    }
})