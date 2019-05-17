// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Closure = Contexto Léxico em ação !

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())

// Execute com a linha nome comentada e descomentada, pra vc ver a mágica