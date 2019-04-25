var numero = 1 
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)

/** 
 * Vai ser 2, para os dois console.log
 * Pois, como já dito o var so tem dois escopos, se ele não tiver em uma função, então ele será declarado como variavél de escopo Global
*/
