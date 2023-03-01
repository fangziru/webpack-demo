class CopyrightWebpackPlugin {
    constructor(option) {
        console.log('使用插件')
    }
    apply(compiler) {
        // 同步
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log('compiler')
        })
        // 异步
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, cb) => {
            console.log('compiler tapAsync')
            compilation.assets['copyright.txt'] = {
                source: function () {
                    return 'copyright by dell lee'
                },
                size: function () {
                    return 21
                }
            }
            cb()
        })
    }
}

module.exports = CopyrightWebpackPlugin