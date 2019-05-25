const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 35
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

// Outro jeito, com Destructury
console.log('======================================')
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Passivel a ser listada
    writable: false, // Pode ser modificada ?
    value: '01/01/2019'
})

pessoa.dataNascimento = '24/11/1998'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//  Object.assign (ECMAScript 2015)
