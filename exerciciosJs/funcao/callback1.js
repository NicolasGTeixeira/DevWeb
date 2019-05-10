const fabricante = ["Mercedes", "Audi", "BMW", "Porshe", "Chevrolet"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`) // Estamos imprimindo, o indice e o nome (1. xpto)
}

fabricante.forEach(imprimir) /** Estou falando aqui que,
enquanto tiver um indice no array "fabricante", será chamado a função "imprimir" */

fabricante.forEach((a) => console.log(a))