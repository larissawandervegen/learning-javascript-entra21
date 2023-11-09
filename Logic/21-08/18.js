// let numeros = [1,2,3,4];
// let soma = numeros[0];
// let maior = numeros[0];
// let menor = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//     soma  += numeros[i]
//     maior = numeros[i]
//     menor = numeros[0]
// }
// console.log("A soma dos números é", soma);
// console.log("O maior valor é", maior);
// console.log("O menor valor é", menor);


let numeros = [1, 2, 4, 2];
let soma = 0; 
let maior = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
       if (maior < numeros[i]) {
              maior = numeros[i]
       } 

       if (menor > numeros[i]) {
              menor = numeros[i]
       }

       soma += numeros[i];
}

console.log(`O maior é ${maior}, o menor é ${menor} e a soma é ${soma}`);