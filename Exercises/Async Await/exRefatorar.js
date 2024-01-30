//1
const numeros = [10, 8, 6];
function arrayNumeros(num) {
    return new Promise((resolve, reject) => {
        let soma = num.reduce((soma, nota) => soma + nota, 0);
        let media = soma / num.length;

        if (!isNaN(media) && media != 0) {
            resolve(media);
        } else {
            reject('Não foi possível somar!');
        }
    });
}

async function media() {
    try {
        const mediaResultado = await arrayNumeros(numeros);
        console.log(mediaResultado);
    } catch (erro) {
        console.log(erro);
    }
}

media();

//2
const num = [2, 3, 5, 7];
function arrayNum(num1) {
    return new Promise((resolve, reject) => {
        const pares = num1.filter((num1) => num1 % 2 === 0)

        if (pares.length > 0) {
            resolve('Números pares no array:' + pares);
        } else {
            reject('Não há numero pares no array');
        }
    });
}

async function imprimePares() {
    try {
        const paresResultado = await arrayNum(num);
        console.log(paresResultado);
    }catch(erro){
        console.log(erro);
    }
}

imprimePares();

// //3
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

const usuarioPromise = obterUser();

async function obterTudo() {
    try {
        const tudo = await obterUser();
        console.log("Nome: ", tudo.nome);
        const resultado = await obterTelefone(tudo);
        console.log("Telefone:", resultado.ddd + resultado.telefone);
    } catch (erro) {
        console.log(erro);
    }
};

obterTudo();