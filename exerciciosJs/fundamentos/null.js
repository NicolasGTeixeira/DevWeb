// É de suma importancia entender essa coisa

const a = {name: 'Teste'}

console.log(a)

const b = a // Aqui o b está recebendo o mesmo endereço de a ( Atribuição por referência )

b.name = 'Opa'

console.log(a) 
console.log(b)

// Quando você alterar o b, o a também vai alterar
// Pois quando você está alterando o a ou o b, está alterando a mesma endereço na memória


// OUTRO JEITO --> Atribuição por Valor

let c = 3
let d = c
console.log(c)
console.log(d)

d++ // Isso está falando d = d + 1 

console.log(c)
console.log(d)

// Percebe que o d ficou diferente de c, é porquê aqui o c e o d não estão apontando para o mesmo endereço da memória

// Quando estamos trabalhando com valores primitivos, ele faz uma cópia do valor para a outra variavél