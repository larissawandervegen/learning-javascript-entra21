let grupo = [1, 5, 16, 68,2,6];
let valor = 0;
function validaIdade(idade) {
    if (idade <= 2) {
        return 0;
    } else if (idade <= 12) {
        return 14;
    } else if (idade >= 65) {
        return 18;
    } else {
        return 23;
    }
}

for (let i = 0; i < grupo.length; i++) {
    valor += validaIdade(grupo[i])
}
console.log(`O valor total das entradas do grupo com as idades: ${grupo}, é igual a: R$${valor.toFixed(2)}`);


// let idade = [0, 10, 25, 70]

// function valorEntrada(idade) {
//     let valor = 0;
//     let valorBebe = 0;
//     let valorCrianca = 14;
//     let valorAdulto = 23;
//     let valorIdoso = 18;
//     for (i = 0; i < idade.length; i++) {

//         if (idade[i] < 3) {
//             valor += valorBebe
//         } else if (idade[i] <= 12) {
//             valor += valorCrianca
//         } else if (idade[i] >= 65) {
//             valor += valorIdoso
//         } else {
//             valor += valorAdulto
//         }
//     }
//     return valor
// }
// console.log("O valor total a pagar é:", valorEntrada(idade).toFixed(2));