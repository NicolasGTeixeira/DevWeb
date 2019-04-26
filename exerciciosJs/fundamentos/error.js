function tratarErroELancar(erro) {
    throw new Error('Uma erro foi encontrado')
    //throw 10
    //throw true
    //throw 'mensagem'
    /**throw {
     * nome: erro.name,
     * msg: erro.mesage,
     * date: new Date 
     * }
    */
}
function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { name: 'Nicolas' }
imprimirNomeGritado(obj)