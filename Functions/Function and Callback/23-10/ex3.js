function obterUsuario(callback) {
    setTimeout (function () {
    return callback(null, {
    id: 1,
    nome: "Aladin",
    dataNascimento: new Date(),
    });
}, 1000);
}

function obterTelefone(callback) {
    setTimeout (function () {
    return callback(null, {
    telefone: "997445151",
    ddd: 47,
    });
}, 2000);
}

function imprimirDados() {
    obterUsuario(function (erroUser, usuario) {
        if (erroUser) {
            console.error('Erro ao obter usuário: ' + erroUser);
        } else {
            console.log('Dados do usuário:', usuario.nome);

            obterTelefone(function (erroTel, telefone) {
                if (erroTel) {
                    console.error('Erro ao obter telefone: ' + erroTel);
                } else {
                    console.log(`Telefone do usuário: ${telefone.ddd} ${telefone.telefone}`);
                }
            });
        }
    });
}

 

imprimirDados();