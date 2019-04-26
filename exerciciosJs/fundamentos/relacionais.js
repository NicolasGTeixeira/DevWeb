// São binários
// Quando faço uma comparação usando operadores relacionais, o resultado sempre será True or False


/**
 * OBS:
 * = --> Significa atribuição
 * == --> Significa comparação de VALOR
 * === --> Significa comparação de TIPO e VALOR
 */

console.log('01)', '1' == 1) // São iguais ?
console.log('02)', '1' === 1) // São estritamente iguais ?
console.log('03)', '3' != 3) // São diferentes ?
console.log('03)', '3' !== 3) // Saõ estritamente diferentes ?

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)