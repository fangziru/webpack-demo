const {merge} = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const commonConfig = require('./webpack.common.js')
const prodConfig = {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build.css'
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)