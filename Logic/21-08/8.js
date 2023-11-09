let numeros = [0,1,2,3,4];
let maior = 0;
for (let i = 1; i < numeros.length; i++) {
   if (numeros[i] > maior) {
    maior = numeros[i]
   }
}
console.log("O maior número da lista é", maior);