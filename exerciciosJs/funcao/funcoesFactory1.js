// É uma função que retorna um objeto

// Sem Factory

const prod1 = {
    nome: 'Air Jordan',
    preco: 'R$ 45,00'
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// Com factory

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())