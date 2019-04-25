// O hoisting é uma elavação da variavél

// Front End (O que a gente programou)

console.log('a = ', a)
var a = 2 
console.log('a = ', a)

// Back End (O que o JS faz)

/**
 * var a (Ele "elevou" a declaração da variavel)
 * console.log('a = ', a)
 * a = 2
 * console.log('a = ', a)
 */

 //OBS: Esse efeito de Hoisting só serve para VAR

console.log('a = ', a)
let a = 2 
console.log('a = ', a)