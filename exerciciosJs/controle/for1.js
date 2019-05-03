let contador = 1

// Versão WHILE
while(contador <= 10) {
    console.log(`O numero do contador é ${contador}`)
    contador++
}


// Versão FOR

for( let i = 1; i<=10; i++){
    console.log(`O numero do contador é ${i}`)
}


// O i vai pegar a posição no array, fazer notas[i], quer dizer que você está pegando a nota a partir do i da vez
const notas = [6.4, 7.3, 9.8, 8.1, 7.7]

for (i=0;i < notas.length;i++){
    console.log(`notas = ${notas[i]}`)
}