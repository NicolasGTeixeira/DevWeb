// Se eu estou atribuindo o meu objeto ao uma constante como eu posso estar conseguindo alterar ela depois
// pessoa --> 123 --> {...} (A constante tem um enderaço de memoria(123), no endereço de memoria o objeto foi criado)
const pessoa = { nome: 'Joao'}
console.log(pessoa)
pessoa.nome = 'Pedro' // Aqui eu não estou alterando a constante pessoa e sim o objeto, ou seja, eu não estou alterando o endereço lógico da constante
console.log(pessoa)

// Pessoa esta recebendo um novo objeto, ou seja, estou tentando apontar a constante "pessoa" para outro endereço de memoria
// pessoa = { nome: 'Ana'} // Perceba que vai dar erro.

// O freeze impedi que altere o objeto
Object.freeze(pessoa)

// Perceba que essas três linhas serão ignoradas
pessoa.nome = 'Nicolas'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'Nicolas'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)