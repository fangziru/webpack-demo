const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext][query]' // 设置静态资源输出目录名称
    },
    module: {
        rules: [
            {
                test: /\.jpg/,
                type: 'asset/resource',
                // type: 'asset/inline' // 图片转成base64
            },
            // {
            //     test: /\.(ttf|woff|woff2)/,
            //     type: 'asset/inline'
            // },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src'),//包含哪些目录做babel转译
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),//包含哪些目录做babel转译
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        open: true // 自动打开浏览器
    }
}