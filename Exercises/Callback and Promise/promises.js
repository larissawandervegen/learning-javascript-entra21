// const minhaPromise = new Promise((resolve, reject) => {
//     //logica assíncrona aqui
//     setTimeout(() => {
//         resolve("Operação Concluída!")
//     }, 1000);
// });

// //tentando imprimir antes que a Promise seja resolvida
// console.log(minhaPromise); // o resultado será: Promise { <pending> }  ( promessa pendente)

// minhaPromise.then((resultado) => {
//     // isso sera impresso depois que a Promise for resolvida
//     console.log(resultado);
// });



// ______________________________________________

const melhorDev = 'Esther'

function quemEMelhor(callback, erroCallback) {
    if(melhorDev != 'Esther' && melhorDev != 'Thaylon'){
        erroCallback({
        name: 'Está errado',
        message: melhorDev + '? Sério?'
    })
}else {
    callback({
        name: melhorDev,
        message: ' Somos os melhores!'
    })
}
}

quemEMelhor((result)=> {
    console.log(result.name + '? Uhuu' + result.message);
},(erro)=> {
    console.log(erro.name + ' ' + erro.message);
})