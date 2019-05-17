// Personalizando a entrada da função factory


function criarPessoa(nome,sobrenome) {
    return {
        nome,//nome: nome,
        sobrenome//sobrenome: sobrenome
    }
}

console.log(criarPessoa('Nicolas', 'Teixeira'))