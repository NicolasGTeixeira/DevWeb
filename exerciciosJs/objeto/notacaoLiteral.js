const a = 1
const b = 2
const c = 3

// Antes ES6

const obj1 = {a:a, b:b, c:c}

// Depois ES6

const obj2 = {a,b,c}
const obj3 = {primeiro:a, segundo:b, terceiro:c} // Se quiser mudar o nome precisa usar a notação antes do ES6
console.log(obj1)
console.log(obj2)
console.log(obj3)

// Para criar dinâmicamente um atributo em um objeto, usando uma String

const nomeAttr = 'nota'
const valorAttr = 7.87

// 1° Forma

const obj4 = {}
obj4[nomeAttr] = valorAttr
console.log(obj4)

// 2° Forma
const obj5 = {[nomeAttr]:valorAttr}
console.log(obj5)

//Formas de declarar uma função dentro de um objeto

// Antes do ES6

const obj6 = {
    funcao1: function(){
        // ...
    },

// Depois do ES6

    funcao2() {
        // ..
    }
}
console.log(obj6)