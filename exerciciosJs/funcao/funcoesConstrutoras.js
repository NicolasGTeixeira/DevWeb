// 

function Carro(Maxima = 200, delta = 5){
    // Atributo privado, ou seja, uma atributo que só está disponível no escopo dessa function
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= Maxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = Maxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)