var listaDeTarefas = [];
var botao = document.getElementById("button");
var mensagemErro = document.getElementById("mensagemErro");
botao.addEventListener("click", adicionar);

function adicionar() {
    mensagemErro.textContent = "";
    var tarefa = document.getElementById('textoTarefa').value;

    if (tarefa.trim() === "") {
        mensagemErro.textContent = "O campo não pode ficar vazio!";
        return;
    }

    var objTarefa = {
        descricao: tarefa,
        concluida: false
    }
    listaDeTarefas.push(objTarefa);
    console.log(listaDeTarefas);
    atualizarLista();
    document.getElementById("textoTarefa").value = "";
    const editar = document.createElement('button');
    editar.textContent = "Editar"
    editar.onclick = () => editarTarefa(index, tarefa);
}

if (localStorage.getItem("itemLista")) {
    listaDeTarefas = JSON(localStorage.getItem("itemLista"))
    atualizarLista()
}

function editTask(index, tarefaItem) {
    const newDescription = prompt('Digite a nova descrição da tarefa:', minhaLista[index].description);
    if (newDescription !== null) {
        minhaLista[index].description = newDescription;
        tarefaItem.textContent = newDescription;
        localStorage.setItem('tasks', JSON.stringify(minhaLista));
    }
}

function atualizarLista() {
    const minhaLista = document.getElementById("minhaLista");
    minhaLista.innerHTML = "";

    listaDeTarefas.forEach(function (tarefa, index) {
        const itemLista = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        if (tarefa.concluida) {
            checkbox.checked = true;
        }

        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                itemLista.classList.add('tarefaConcluida');
                itemLista.classList.remove('tarefaNaoConcluida');
                tarefa.concluida = true;
            } else {
                itemLista.classList.remove('tarefaConcluida');
                itemLista.classList.add('tarefaNaoConcluida');
                tarefa.concluida = false;
            }
            console.log(listaDeTarefas);
        })

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function () {
            listaDeTarefas.splice(index, 1);
            atualizarLista();
            console.log(listaDeTarefas);
        });

        itemLista.appendChild(checkbox);
        itemLista.appendChild(document.createTextNode(tarefa.descricao));
        itemLista.appendChild(botaoRemover);
        minhaLista.appendChild(itemLista);
    });
}
localStorage.setItem('taks', JSON.stringify(listaDeTarefas))

