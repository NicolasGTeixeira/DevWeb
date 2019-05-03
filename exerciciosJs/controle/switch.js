const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break // Ele só vai sair do switch se colocar esse break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // Como se fosse um else
            console.log('Nota inválida')
    }
}

imprimirResultado(10.2)
imprimirResultado(9)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(0)
imprimirResultado(-1)