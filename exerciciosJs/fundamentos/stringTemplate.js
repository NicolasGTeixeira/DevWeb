// Concatenação de String

const nome = 'Nicolas'
const concatenacao = "Ola" + nome + "!" // Jeito "feio" de concatenar
const template = `Olá ${nome}!` // Usando Template
console.log(template)

// Expressões matemáticas

console.log(`1 + 1 = ${1+1}`)

// Chamando Funções

const up = texto => texto.toUpperCase()
console.log(`Ei.... ${up(nome)}, eu estou bem aqui`)