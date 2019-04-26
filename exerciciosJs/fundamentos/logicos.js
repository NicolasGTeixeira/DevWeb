function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor --> Primeira maneira
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

    /**
     * Forma leviana
     * return{
     *   comprarSorvete: comprarSorvete, 
     *   comprarTv50: comprarTv50, 
     *   comprarTv32: comprarTv32, 
     *   manterSaudavel: manterSaudavel
     * }
     */
}
console.log("trabalho1: true, trabalho2: true")
console.log(compras(true, true)) // trabalho1: true, trabalho2: true
console.log("trabalho1: false, trabalho2: true")
console.log(compras(false, true)) // trabalho1: false, trabalho2: true
console.log("trabalho1: true, trabalho2: false")
console.log(compras(true, false)) // trabalho1: true, trabalho2: false
console.log("trabalho1: false, trabalho2: false")
console.log(compras(false, false)) // trabalho1: false, trabalho2: false