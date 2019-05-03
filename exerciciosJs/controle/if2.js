//Quando coloca um IF sem {}, o retorno do mesmo será apenas a primeira linha de comando
function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')
}

// teste1(6)
// teste1(8)

// Cuidado com o ";" ele quer dizer a separação de uma sentença de código

function teste2(num){
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)
