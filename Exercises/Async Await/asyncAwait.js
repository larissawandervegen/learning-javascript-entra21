function melhorBandaDeRock(banda) {
    return new Promise((resolve, reject) => {
        if (banda == 'One Direction') {
            resolve({
                sucesso: true,
                nomeDaBanda: banda,
                msg: banda + "é a melhor boyband!"
            });
        } else {
            reject({
                sucesso: false,
                msg: "Não tenho certeza",
            });
        }
    });
}

function melhorMusica(resposta) {
    return new Promise((resolve, reject) => {
        if (resposta.sucesso) {
            resolve("Home de " + resposta.nomeDaBanda)
        } else {
            reject("Você conhece o 1D?")
        }
    });
}

// melhorBandaDeRock("One Direction")
//     .then((resultado) => {
//         console.log('Checando a resposta...');
//         return melhorMusica(resultado);
// })
//     .then(resultado => {
//         console.log('Encontrando a melhor música');
//         console.log(resultado);
// })
//     .catch(erro => {
//         console.log(erro.msg);
// })

async function resolve(){
    const melhorBandaResultado = await melhorBandaDeRock("One Direction");
    console.log(melhorBandaResultado);
    const melhorMusicaResultado = await melhorMusica(melhorBandaResultado)
    console.log(melhorMusicaResultado);
}

resolve();