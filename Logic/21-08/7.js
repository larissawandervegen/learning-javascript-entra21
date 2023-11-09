let numeros = [0,1,2];
let sub = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    sub -= numeros[i]
}
console.log("A subtração dos números é:",sub);