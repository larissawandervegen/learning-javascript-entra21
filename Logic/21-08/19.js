// let numero = 7;
// if (numero / numero === 1 & numero / 1 === numero & numero % 2 != 0 ) {
//     console.log("O número", numero, "é um número primo.");
// }else{
//     console.log("O número", numero, "não é um número primo.");
// }

if (numero > 1) {
       for (let i = 2; i < numero; i++) {
              if (numero % i === 0) {
                     // Se o número for divisível por algum outro número além de 1 e ele mesmo, não é primo
                     ePrimo = false;
                     break; // Não é necessário continuar verificando
              }
       }
} else {
       ePrimo = false;
}

if (ePrimo) {
       console.log(`${numero} é um número primo.`);
} else {
       console.log(`${numero} não é um número primo.`);
}