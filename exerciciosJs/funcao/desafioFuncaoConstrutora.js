/**class pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Nicolas')
p1.falar() */

function pessoa(nome){

    this.nome = nome // Pode ser com essa linha comentada, a unica diferença é que, se comentada a linha 23 não vai achar o nome

    this.Criador = () => console.log(`Meu nome é ${nome}`)
}

const p1 = new pessoa('Nicolas')
p1.Criador()
console.log(p1.nome)