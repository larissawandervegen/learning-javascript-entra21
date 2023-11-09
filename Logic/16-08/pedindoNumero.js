let numero = 10;
let contador = 0;
///!isNaN(numero)
while (contador < 3){
if (numero >= 12 && numero <=20){
    console.log('O número digitado é:', numero);
    break
}else{
    console.log('Entrada inválida!');
    contador++;   
}
}
if (contador === 3){
    console.log('Número de tentativas excedido!');
}

