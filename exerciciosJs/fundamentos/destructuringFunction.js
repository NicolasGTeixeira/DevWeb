function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// Declarando os dois parâmetros

const obj = {max: 50, min: 40}
console.log(rand(obj))

// Declarando apenas um

console.log(rand({min: 955}))
console.log(rand({max: 345}))

// Não passando valor

console.log(rand({}))
