
module.exports = function (source) {
    const options = this.getOptions()
    const result = source.replace('hello', options.name)
    // this.callback(null, result)

    // 有异步操作
    const callback = this.async()
    setTimeout(() => {
        callback(null, result)
    }, 1000)
}