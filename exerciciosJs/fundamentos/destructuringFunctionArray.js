function rand([min = 0, max = 1000]){
    if (min > max) [min,max] = [max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
/**
 * Perceba que não fica tão claro quem é o max e quem é o min
 * Por isso temos aquele if que inverte se o min for maior que o max
 */

// Passando os dois valores
 console.log(rand([50,40]))

// Passando apenas um valor
  console.log(rand([50]))

// Passando nenhum valor, ou seja, array vazio
  console.log(rand([]))
