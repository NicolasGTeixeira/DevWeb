function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area} m2.`)
    } else {
        console.log(area)
    }
}

area(2,4)
area(2)
area()
area(2,3,4,44,5,6)
console.log(area(5,5))
