// callback

function somaNumeros(sucesso, erro) {
    let result = 1 + 1;

    if (result == 2) {
        sucesso();
    } else {
        erro();
    }
}
function sucesso() {
    console.log('Deu certo, numero 2');
}
function erro() {
    console.log('Errou');
}
somaNumeros(sucesso, erro);



// promise

let promise = new Promise((resolve, reject) => {
    let soma = 1 + 5;
    if (soma === 2) {
        resolve('Deu certo, numero 2');
    } else {
        reject('Errou');
    }
});

promise.then((mensagem) => {
    console.log(mensagem);
}).catch((erro) => {
    console.log(erro);
})



// OUTRO EXEMPLO

//Callback
const melhorDev = 'Esther'
function quemEMelhor(callback, erroCallback) {
    if (melhorDev != 'Esther' && melhorDev != 'Thaylon') {
        erroCallback({
            name: 'Está errado',
            message: melhorDev + '? Sério?'
        })
    } else {
        callback({
            name: melhorDev,
            message: ' Somos os melhores!'
        })
    }
}
quemEMelhor((result) => {
    console.log(result.name + '? Uhuu' + result.message);
}, (erro) => {
    console.log(erro.name + ' ' + erro.message);
})

//Promise
const melhorDev1='João'
function quemEMelhor1() {
    return new Promise((resolve, reject) => {
        if (melhorDev1 != 'Esther' && melhorDev1 != 'Thaylon') {
            reject({
                name1: 'Esta errado',
                message1: melhorDev1 + '? Sério?'
            })
        } else {
            resolve({
                name1: melhorDev1,
                message1: 'Somos os melhores!'
            })
        }
    })
}
quemEMelhor1()
    .then((result) => {
        console.log(result.name1 + '? Uhuu' + result.message1);
    }).catch((erro) => {
        console.log(erro.name1 + ' ' + erro.message1);
    })
