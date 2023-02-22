const sum = (a, b) => {
    return a + b
}
const res = sum(10, 20)
console.log(res)

class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number
    }
    sayHi() {
        console.log(`姓名 ${this.name}, 学号 ${this.number}`)
    }

}
// 通过类 new 对象/实例
export default new Student('夏洛', 100)

