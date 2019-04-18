// Vamos falar um pouco sobre numeros no Java Script

// {
//Formas de declarar um number 
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) // Peso1 é um inteiro
console.log(Number.isInteger(peso2)) // Peso2 NÃO é um inteiro
// }


//Exemplo de utilização dos numbers
// Exemplo de uma calculadora que calcula a média do aluno

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1+peso2)

console.log(media.toFixed(2))
console.log(media.toString())
// toFixed --> Ele delemita quantas casas depois da virgula irá ser impresso
/* toString --> Coverte o number em String
*      | --> OBS: Temos varias funcoes do softwre, exemplo é colocar um 2 no "*.toString(2)", ele imprime a variavel em binário.
*/