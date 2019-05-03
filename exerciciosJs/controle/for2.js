const notas = [6.4, 7.3, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(`Nota: ${notas[i]}`)
}

const pessoa = {
    nome: "Nicolas",
    sobrenome: "Teixeira",
    idade: 20,
    peso: 58.6
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}