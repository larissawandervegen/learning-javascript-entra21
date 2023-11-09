// let nomeAtleta = "Rodrigo Curvêllo";
// let saltos = [6.5, 6.1, 6.2, 5.4, 5.3];
// let melhorSalto = saltos[0];
// let piorSalto = saltos[0];
// let soma = 0;
// for (let i = 0; i < saltos.length; i++) {
//     soma += saltos[i];
//     melhorSalto = saltos[0];
//     piorSalto = saltos[i];
// }
// console.log(soma / 3);
// console.log(melhorSalto);
// console.log(piorSalto);

// let saltos = [6.5, 3.8, 6.1, 5.5, 5.9]
// let primeiro = saltos[0];
// let segundo = saltos[1];
// let terceiro = saltos[2];
// let quarto = saltos[3];
// let quinto = saltos[4];

// let nome = 'João';
// let somaNotas = 0;

// saltos.sort((a, b) => a - b);

// saltos.shift();
// saltos.pop();

// for (let i = 0; i < saltos.length; i++) {
//        somaNotas += saltos[i];
// }

// let media = somaNotas / saltos.length;

// console.log(`Atleta: ${nome} \n 
//        Primeiro salto: ${primeiro} \n
//        Segundo salto: ${segundo} \n
//        Terceiro salto: ${terceiro} \n
//        Quarto salto: ${quarto} \n
//        Quinto salto: ${quinto} \n
//        Melhor salto: ${saltos[saltos.length - 1]} \n
//        Pior salto: ${saltos[0]} \n
//        Média dos demais saltos: ${media.toFixed(2)} \n
//        Resultado final: ${nome}: ${media.toFixed(2)} \n
//        `);

// // \n quebra linha

var n = [6.5, 6.1, 6.2, 5.4, 5.3]
var menor = n[0];
var maior = n[0];

for (i = 1; i < n.length; i++) {
    if (maior < n[i]) {
        maior = i;
    }
    if (menor > n[i]) {
        menor =  n[i];
    }
    console.log(`o ${i} salto foi de ${n[i]} m`);
}
n.sort((a, b) => a - b);
n.pop();
n.shift();
var soma = n[0]

for (i = 1; i < n.length; i++) {
    soma += n[i];
}

console.log(`maior : ${maior}, menor: ${menor}, media ${(soma / n.length).toFixed(2)}`);