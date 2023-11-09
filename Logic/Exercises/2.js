// let nota1 = 7;
// let nota2 = 6;
// let nota3 = 6.5;
// let media = (nota1 + nota2 + nota3) / 3
// if (media >= 7) {
//     console.log(`Sua média é: ${media}, você está aprovado!`);
// }else{
//     console.log(`Sua média é: ${media}, você está reprovado!`);
// }
let notas = [7,6,6.5];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log(soma / notas.length);