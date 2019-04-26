//ternario é um operador que tem 3 operandos
/**
 * Estrutura
 * Ele é composto por três partes:
 * 1) Exepressão: nota >= 7
 * 2) ?
 * 3) Retorno se for TRUE
 * 4) Retorno se for FALSE
 */
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(3.0))