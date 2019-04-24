// Vamos estudar um pouco sobre boolanos

let isAtivo = false // Estamos falando que a variavél isAtivo o status dela é false
console.log(isAtivo)

isAtivo = true // Agora ativamos
console.log(isAtivo)

console.log("Exemplos de verdadeiro")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(!!"Exemplos de falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para Finalizar...")
console.log('' || null || 0 || ' ') // Se tiver um caso que seja verdadeiro, então o resultado final será verdadeiro
console.log('' || null || 0 || 'Ele vai imprimir esse cara' || 'Ou será que vai ser esse ?') // Ele exibe o primeiro valor verdadeiro que ele encontra


console.log("Exemplo prático")
let nome = ''
console.log(nome || 'Desconhecido')
let idade = 20
console.log(idade || 'Desconhecido')


