// O destructuring serve para você conseguir pegar informações de uma estrutura de modo fácil 

const pessoa = {
    nome: 'Nicolas',
    idade: 20,
    endereco: {
        logadouro: "Rua Love of My live",
        numero: 3.45 
    }
}

// Agora eu quero pegar o nome e a idade desse objeto pessoa

/**
 * Entendendo a estrutura 
 * const { nome, idade } = pessoa
 * const = só declarando o tipo
 * {} = Não confunda com objeto, as {} é que chama o destructuring
 * = pessoa = Está falando de onde vai tirar as informações
 */
 const { nome, idade } = pessoa

 const { endereco:{logadouro: lugar}, idade: year} = pessoa

 console.log(lugar)