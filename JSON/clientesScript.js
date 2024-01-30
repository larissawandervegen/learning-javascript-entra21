var botao = document.getElementById("bt");
botao.addEventListener("click", clicar);
function clicar() {
    fetch('http://localhost:3000/clientes')
        .then((resp) => resp.json())
        .then((data) => {

            data.forEach((pessoa) => {
                let tab = document.getElementById("tabela");
                let corpo = document.createElement("tr");
                let colunaId = document.createElement("td");
                colunaId.innerHTML = pessoa.id;

                let colunaNome = document.createElement("td");
                colunaNome.innerHTML = pessoa.nome;

                let colunaEmail = document.createElement("td");
                colunaEmail.innerHTML = pessoa.email;

                let colunaFone = document.createElement("td");
                colunaFone.innerHTML = pessoa.fone;

                tab.appendChild(corpo);
                corpo.appendChild(colunaId);
                corpo.appendChild(colunaNome);
                corpo.appendChild(colunaEmail);
                corpo.appendChild(colunaFone);
            });
        })
        .catch(erro => console.error(erro));
}

var botao = document.getElementById("button");
botao.addEventListener("click", adicionar);

function adicionar() {
    var objCliente = {
        id: document.getElementById("idCliente").value,
        nome: document.getElementById("nomeCliente").value,
        email: document.getElementById("emailCliente").value,
        telefone: document.getElementById("telCliente").value
    };
    console.log(objCliente);
    fetch('http://localhost:3000/clientes', {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(objCliente)
    })
        .then(response => response.json())
        .then(dados => {
            document.location.href = "pesquisaClientes.html"
        })
        .catch(error => console.error('Erro ao adicionar cliente: ', error));
}