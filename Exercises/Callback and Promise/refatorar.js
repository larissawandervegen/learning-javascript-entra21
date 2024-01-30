let principal = new Promise((resolve, reject) => {
    const valor = 77;
    if (valor == 77) {
        resolve('Número ' + valor + ' está correto');
    } else {
        reject('Tente novamente');
    }
});

principal.then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.log(erro);
})

//_________________________________________________________

const numeros = [10, 8, 6];
function arrayNumeros(num) {
    return new Promise((resolve, reject) => {
        let soma = numeros.reduce((soma, nota) => soma + nota, 0);
        let media = soma / numeros.length;

        if (!isNaN(media) && media != 0) {
            resolve(media);
        } else {
            reject('Não foi possível somar!');
        }
    });
}

arrayNumeros(numeros).then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.log(erro);
})

// ________________________________________________________

const numeros1 = [2, 3, 5, 7];
function arrayNumeros1(num1) {
    return new Promise((resolve, reject) => {
        const pares1 = numeros1.filter((numero1) => numero1 % 2 === 0)

        if (pares1.length > 0) {
            resolve('Número pares:' + pares1);
        } else {
            reject('Não há numero pares no array');
        }
    });
}

arrayNumeros1(numeros1).then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.log(erro);
})

//_________________________________________________________
// function obterUser() {
//     return new Promise((resolve, reject) => {
//         let usuarioCad = {
//             id: 1,
//             nome: "Aladin",
//             dataNascimento: new Date(),
//         }

//         if (usuarioCad != null) {
//             return setTimeout(() => {
//                 return resolve(usuarioCad)
//             }, 1000)
//         } else {
//             reject('erro')
//         }
//     })
// };
// const cadTel = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             telefone: 997445151,
//             ddd: 47,
//         })
//     }, 2000);
// })

// cadUser.then((resultado) => {
//     console.log(resultado.nome);
//     cadTel.then((result) => {
//         console.log(result.ddd, result.telefone);
//     }).catch((errooo) => {
//         console.log(errooo);
//     })
// }).catch((err) => {
//     console.log(err);
// })

function obterUser() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date(),
            });
        }, 1000);
    });
};

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            return resolve({
                telefone: "997445151",
                ddd: 47,
            });
        }, 2000);
    });
}

const usuarioPromise = obterUsuario();

usuarioPromise
    .then((usuario) => {
        return obterTelefone(usuario.id)
            .then((tudo) => {
                return {
                    user: {
                        nome: usuario.nome,
                        telefone: tudo.telefone,
                    },
                };
            });
    })
    .then(function (resultado) {
        console.log("Sucesso", resultado);
    })
    .catch(function (error) {
        console.error("Deu ruim", error);
    });