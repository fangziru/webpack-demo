import './index.css'
import './font/iconfont.css'
import printMe from './js/print'
import demoImg from './images/demo.jpg'
import es6test from './js/es6test'
printMe()
// print里代码发生变化，只更新这个文件的内容，整体页面不变
if (module.hot) {
    module.hot.accept('./js/print', () =>{
        printMe()
    })
}

let img = new Image()
img.width = 100
img.height = 80
img.src = demoImg
document.body.appendChild(img)


var btn = document.createElement('button')
btn.innerHTML = '点击'
document.body.appendChild(btn)

btn.onclick = function () {
    var div = document.createElement('div')
    div.innerHTML = 'item'
    document.body.appendChild(div)
}

console.log(es6test.name)
console.log(es6test.number)
es6test.sayHi()