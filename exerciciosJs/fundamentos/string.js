/*Vamos estudar um pouco de String*/

const escola="NGT1"

console.log(escola.charAt(2)) // O chatAt pega o caracter referente a posição que eu colocar
console.log(escola.charCodeAt(1)) // Ele pega o codigo relacionado ao UniCode ou ASCII

console.log(escola.indexOf('G')) // Ele retorna em qual posição(Indice) esta o cara que eu colocar

console.log(escola.substring(1)) // Ele pega a partir do index 1 e vai até o final
console.log(escola.substring(0, 2)) // Ele pega a partir do primeiro index e vai até o segundo index

console.log('Escola '.concat(escola).concat("!")) // Ele esta fazendo uma cadeia de caracter.
console.log('Escola ' + (escola) + "!") // Outro jeito de fazer uma cadeia de caracter.

console.log(escola.replace(/\d/, 'eixeira')) // Ele esta fazendo um replace (substituindo) todo DIGITO por "eixeira"

// Transformando uma string separada por virgula em um array
console.log('Nicolas,Beatriz,Wânia,Nivaldo'.split(',')) // o .split pede um parametro e nesse caso eu estou falando que os elementos do array vão ser determinados por um uma ","