let numeros = [4,8,6,12,28,50];
let add = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    add += numeros[i]
}
console.log("A média dos números é", add/numeros.length);