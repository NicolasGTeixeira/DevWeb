const notas = [7.7, 4.5, 6.9, 3.4, 6.7, 4.5, 9.9, 1.0, 10.0]

// Sem Callback

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com Callback

const notasBaixas2 = notas.filter(nota => nota < 7)

console.log(notasBaixas2)
