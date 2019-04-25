console.log(typeof Object) // Um object é uma função em JS
console.log(typeof new Object) // Um object estanciado é um object

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())