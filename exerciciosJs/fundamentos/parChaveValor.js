// Chave: Valor

const saudacao = 'Opa' // Contexto léxico 1 (É o local onde sua variavel foi definido)

function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares chave/valor

const  cliente = {
    nome: 'Nicolas',
    idade: 20,
    peso: 58.4,
    endereco: {
        logadouro: 'Av. João Alcides',
        numero: 234
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)