var numero = 1
{
    let numero = 2
    console.log('dentro = ',numero)
}
console.log('dentro = ',numero)

/**
 * o Let tem 3 escopos
 * 1) Global = Ela é visivel para todos
 * 2) Function = Ela é visivel na função
 * 3) Bloco = Ela é visivel no bloco (Ele é a grande diferença entre Var e Let)
 */