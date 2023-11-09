//função nomeada
function funcaoNomeada(nome) {
    console.log("Nomeada", nome);
}

funcaoNomeada('Lari');

//Função Anônima
const anonima = function () {
    console.log('Anônima');
}

anonima();

//Arrow Function
const arrow = um => {
    console.log('Arrow Function', um);
}

arrow('Um');

//ou

// const arrow = um => console.log('Arrow Function', um);

// arrow('Um');

//Callback

const saudar = (responder) => {
    const horaAtual = new Date().getHours();
    
    if (horaAtual <= 12) {
        return responder('Bom dia!');
    } else if (horaAtual <= 18) {
        return responder('Boa tarde!');
    } else {
        return responder('Boa noite!');
    }
}

const callback = (saudacao) => console.log(saudacao);
saudar(callback);

//Callback com função nomeada
const verificaSaudar = function horasSaudacao(pcallback) {
    const hora = new Date().getHours();
    if (hora <= 12) {
        return pcallback('Bom dia!');
    } else if (hora <= 18) {
        return pcallback('Boa tarde!');
    } else {
        return pcallback('Boa noite!');
    }
}
const imprimeSaudacao = function imprimir(saudacao) {
    console.log(saudacao);
}
verificaSaudar(imprimeSaudacao);

function saudar2(parametroCallback) {
    const horaAtual1 = new Date().getHours();

    if (horaAtual1 <= 12) {
        return parametroCallback('Bom dia!');
    } else if (horaAtual1 <= 17) {
        return parametroCallback('Boa tarde!');
    } else {
        return parametroCallback('Boa noite!');
    }
}

function imprime(saudacao1){
    console.log(saudacao1);
}

saudar2(imprime);

const funcaoPrincipal = (parametro) => {
    const valor = 77;
    parametro(valor);
}

const call = (num) => {
    console.log(num);
}

funcaoPrincipal(call);