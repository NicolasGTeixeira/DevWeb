// Quando é declarado uma função além do seu conteudo interno, parametros, nomes etc... Ela também carrega consigo o contexto onde ela foi declarada

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // Executando desse jeito o contexto léxico, vai ser o valor = Global
}

exec()

