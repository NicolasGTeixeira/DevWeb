// Função é tipo uma receita de bolo, a função é um verbo, ação, ela executa um processo, baseado na sentença de código
// O corpo de uma função é um bloco, ou seja, função nada mais é do que um trecho de código que você pode reusar ele.

// Vamos lá

function imprimiSoma(a,b) {
    console.log(a + b)
}

imprimiSoma(2,3)

// Função com retorno

function soma(a, b = 0){
    return a + b
}

console.log(soma(2))