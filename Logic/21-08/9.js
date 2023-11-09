let numeros = [0,1,2,3,4];
let menor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
   if (numeros[i] < menor) {
    menor = numeros[i]
   }
}
console.log("O menor número da lista é", menor);