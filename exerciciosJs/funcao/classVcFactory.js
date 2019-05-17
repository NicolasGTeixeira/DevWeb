// USANDO CLASS

class pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Nicolas')
p1.falar()

// USANDO FACTORY

const pessoaFactory = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoaFactory('Nicolas Gabriel')
p2.falar()