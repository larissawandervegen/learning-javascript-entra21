// let n1 = 1234
// // n1 = Number(n1);
// let numero = n1.toString();
// somar(numero)
// function somar (numero){
//     let n1 = Number(numero[0]);
//     let n2 = Number(numero[1]);
//     let n3 = Number(numero[2]);
//     let n4 = Number(numero[3]);
//     console.log(n1+n2+n3+n4);
//     // console.log(((n1/1000) + ((n1/100)%10) + ((n1/10)%10) + (n1%10)).toFixed(0) );    

// }

function calcularSomaDigitos(numero) {  //Cria uma funçao dependente de um numero
    let soma = 0;                       // Criamos uma variavel para fazer a soma dos quatro digitos 
    let numeroStr = numero.toString();  // Convertemos o valor de numero de inteiro para String
    for (let i = 0; i < numeroStr.length; i++) {         // Criamos um loop para somar os valores dos digitos conforme i++
        soma += parseInt(numeroStr[i]);
    }
    return soma;                                         // Sempre lembrando de retornar o resultado 
}

let numeroInteiro = 1234;                     // O numero q sera inserido pelo usuario (deve ser de 4 digitos)     
console.log(calcularSomaDigitos(numeroInteiro));

// parseInt = Number (converte para número inteiro)