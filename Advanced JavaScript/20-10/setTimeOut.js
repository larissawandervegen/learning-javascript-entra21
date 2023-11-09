function exibirMensagem() {
    let mensagem = document.getElementById('mensagem');
    mensagem.innerHTML = "A mensagem após 3 segundos";
}

setTimeout(exibirMensagem, 3000)