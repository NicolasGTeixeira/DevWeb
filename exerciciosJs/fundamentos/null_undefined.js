let valor // não vou atribuir nada
console.log(valor) // O valor dela já que não foi inicializada, por padrão vai ser "undefined"

valor = null // Valor que ela é null quer dizer ela não esta apontando pra algum endereço de memória, ou seja, ela não tem nenhum valor, logo null quer dizer ausencia de valor. 
            // Porém ela está inicianilizada


// CUIDADOS

//console.log(valor.toString()) --> Ela vai dar erro, então tome cuidade em tentar acessar uma variável que esteja null ou undefined

const produto = {}
console.log(produto.preco) // Veja que ele considera undefined
console.log(produto) // Perceba que ele foi inicianilizada, mas está vazia

produto.preco = 3.50 
console.log(produto)

// Atribuição para null é atribuir pra nada
