// Jeito normal
let dobro = function(a){
    return 2*a
}

// Function arrow sempre é uma função anonima

// Primeira forma de escrever
dobro = (a) => {
    return 2 * a
}

// Segunda forma (Quando a função so tem uma setença de código)
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

/////////////////////////////////////////////
// Outro exemplo

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'

console.log(ola())
