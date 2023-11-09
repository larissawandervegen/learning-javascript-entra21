let numeros = [0,1,0,1,0,1,0,1,0,1];
let ums=0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]===1){
        ums++
    }
}
console.log("O total de números 1 é:", ums);
