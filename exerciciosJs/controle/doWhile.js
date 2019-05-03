function getNumeroAleatorio(max, min){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)   
}

let opcao = -1

do{
    opcao = getNumeroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while (opcao != -1)

console.log('Até a próxima!')