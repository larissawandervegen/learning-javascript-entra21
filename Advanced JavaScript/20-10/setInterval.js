var contador = 0;

function atualizarContador() {
    var contadorHTML = document.getElementById("contador");
    contadorHTML.innerHTML = "Contagem " + contador;
    contador++;
}

var intervalo =  setInterval(atualizarContador, 1000);

setTimeout(function(){
    clearInterval(intervalo);
    document.getElementById('contador').innerHTML = 'Contagem finalizada!'
}, 6000)