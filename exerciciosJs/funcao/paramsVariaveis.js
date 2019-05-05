function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2,3,4,56,7,8,9))
console.log(soma(2,3,4,12,3434,123,3))
console.log(soma(null))
