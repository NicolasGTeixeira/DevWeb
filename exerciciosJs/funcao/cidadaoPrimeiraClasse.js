// Função em JS é First-Class Object (Citiziens)
// Higher-order function

// Criar de forma literal

function fun1() { }

// Armazenando em uma variável

const fun2 = function() { }

// Armazenar em um array

const array = [function(a,b) {return a+b }, fun1, fun2] // Além de poder declarar uma function dentro do array, pode chamar outras functions também

console.log(array[0](2,3))

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// Passar função como param

function run(fun) {
    fun()
}

run(function () {console.log('Executando...')}) 

// Uma função pode retornar/conter uma função

function soma(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}

// 1ºForma de passar o parametro de uma função dentro de outra função
soma(2,3)(4)

// 2ºForma de passar o parametro de uma função dentro de outra função

const somais = soma(2,3) // Aqui so estamos chamando a função soma
somais(9) // Aqui estamos indo até a ultima função. No final das contas fica igual a 1ºForma
