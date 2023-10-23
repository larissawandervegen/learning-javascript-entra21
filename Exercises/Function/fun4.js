function verificaNumero(numero) {
    if (numero > 0) {
        return "O número é positivo!"
    }else if (numero < 0){
       return "O número é negativo."
    }else{
        return "O número inserido é 0."
    }
}

console.log(verificaNumero(-1));