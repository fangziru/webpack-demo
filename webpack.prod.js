const path = require('path')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'cheap-module-source-map',
}

module.exports = merge(commonConfig, prodConfig)