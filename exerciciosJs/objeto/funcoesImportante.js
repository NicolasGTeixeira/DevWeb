const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 35
}

console.log(Object.keys(pessoa)) // Ele vai pegar todas as chaves do objeto
console.log(Object.values(pessoa)) // Ele vai pegar todos os valores do objeto
console.log(Object.entries(pessoa)) // Ele mostra em sub arrays as chaves com seus respectivos valores


Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

// Outro jeito, com Destructury
console.log('======================================')
Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Aqui podemos definir as propriedades(Algumas caracteristicas) de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Passivel a ser listada
    writable: false, // Pode ser modificada ?
    value: '01/01/2019'
})

pessoa.dataNascimento = '24/11/1998'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//  Object.assign (ECMAScript 2015) 
/** ESTRUTURA DO ASSIGN
 *  Object.assign(ObjDestino, Objeto1, Objeto3, ...)
 *  ObjDestino = {ObjDestino, Objeto1, Objeto3, ...}
 */ 
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a:4 }
const obj = Object.assign(dest, o1, o2)

console.log(dest)