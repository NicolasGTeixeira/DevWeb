console.log(Math.ceil(6.11)) // Perceba que já apareceu um "."

const obj1 = {}
obj1.name = 'Nicolas'
// obj1[name] = 'Beatriz'
console.log(obj1.name)

function Obj(name) {
    this.name = name
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Gabriel')
const obj3 = new Obj('Teixeira')

console.log(obj2.name)
console.log(obj3.name)
obj3.exec()