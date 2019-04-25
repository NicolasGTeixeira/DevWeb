var funcs = []

for (var i = 0; i <= 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs()

// Não importa o que vai ser o i, ele sempre vai pegar o ultimo valor de "i"