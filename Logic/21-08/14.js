let numeros = [1,2,3,4,5,6];
let totalpar = 0;
let pares = [];
let totalimp = 0;
let imp = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0){
        totalpar++
        pares.push(numeros[i])
    }else{
        totalimp++
        imp.push(numeros[i])
    }
}
console.log("O total de números pares é:", totalpar);
console.log("Os números pares são:", pares);
console.log("O total de números ímpares é:", totalimp);
console.log("Os números ímpares são:", imp);

