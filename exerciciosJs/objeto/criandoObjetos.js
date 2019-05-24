// Usando a notação literal (NÃO CONFUNDIR COM UM JSON)

const obj1 = {}
console.log(obj1)

// Object em JS

console.log(typeof Object, typeof new Object)

// Função Contrutoras

function Produto(nome, preco, desc){
    this.nome = nome // Ele ficara visivel, pra fora da function (Atributo Publico)
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}


const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('Nicolas', 2100, 0)
const f2 = criarFuncionario('Baldin', 10000, 3)
const f3 = criarFuncionario('Guilherme', 935, 0)

console.log(f1.getSalario(), f2.getSalario(), f3.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)


// Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info":"Sou um Json sendo transformado em objeto"}')
console.log(fromJSON.info)