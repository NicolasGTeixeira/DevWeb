// No caso da variável var, ela fica visível até fora do bloco

{{{{ var sera = 'Será???'}}}}

console.log(sera)

// OBS: Não sendo uma função

function testeVar(){
    var local = 123
    console.log(local)
}

console.log(local) // Aqui o local não vai aparecer

testeVar() // Aqui, logicamente o local vai aparecer

// Cuidado com variaveis globais

/**
 * VAR só tem DOIS ESCOPOS
 * 1) Global: Ela é visivel para todos
 * 2) Function: Ela é visivel na função
 */