let comparaComThis = function(param) {
    console.log(this === param)
}

console.log(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // Aqui vc esta apontando o comparaComThis para o contexto do obj
comparaComThis(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)