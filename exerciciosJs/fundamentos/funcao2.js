// Armazenando uma função dentro de uma variavel
// Vamos usar o conceito de função anônima, ou seja, uma função sem nome

const imprimirSoma = function (a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel

// Primeira forma

const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

// Usando retorno implicito

const subtracao = (a,b) => a-b

console.log(subtracao(3,2))