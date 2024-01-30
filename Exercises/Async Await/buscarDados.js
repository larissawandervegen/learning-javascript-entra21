// Suponha que você tenha uma função buscarDados que simula a obtenção de dados de uma API. No entanto, essa função retorna uma Promise e pode ocasionalmente ser rejeitada, simulando erros de rede ou outras falhas.
// Instruções:
// Crie uma função assíncrona chamada processarDados que usa buscarDados para obter dados de uma API.
// Utilize try/catch para lidar com possíveis erros durante a obtenção dos dados.
// Se os dados forem obtidos com sucesso, imprima-os no console.
// Se ocorrer um erro, imprima a mensagem de erro no console.
// Chame a função processarDados e observe os resultados.
// Dica: Use a sintaxe async/await para tornar o código mais legível e sequencial.

function buscarDados(){
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            const dados = {nome: "Lari", idade: 18};
            if (Math.random() < 0.9) {
                reject(new Error('Erro ao obter dados da API.'));
            } else {
                resolve(dados);
            }
        }, 2000);
    });
}

async function processarDados(){
    try{
        const dadosResultado = await buscarDados();
        console.log("Nome: "+ dadosResultado.nome + " Idade: " + dadosResultado.idade);
    }catch(erro){
        console.log(erro);
    }
}

processarDados();