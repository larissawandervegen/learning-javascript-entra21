// 1 Crie um programa que use um loop for para imprimir os números de 1 a 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2 Crie um programa que use um loop for para imprimir apenas os números pares de 1 a 20;

// Obs: fui pela lógica simples de iniciar a variável i com um numero par
// mas pode ser feito usando um if % 2 === 0 dentro do laço for se quiser.
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// 3 Crie um programa que use um loop while para imprimir os números de 10 a 1.

let contador = 10;

while (contador >= 1) {
  console.log(contador);
  contador--;
}

// 4 Crie um programa que use um loop do-while para imprimir os números pares de 2 a 10.

let counter = 2;

do {
  console.log(counter);
  counter += 2;
} while (counter <= 10);

// 5 Crie um programa que use um loop for para calcular a soma dos números de 1 a 10 e exiba o resultado.

for (let i = 1; i <= 10; i++) {
  var soma = 0;
  soma += i;
}
console.log("O resultado é: ", soma);

// 6 Crie um programa que use um loop while para exibir a tabuada do número 5 (de 1 a 10).

let tabuada = 5;
let count = 0;

while (count <= 10) {
  console.log(tabuada * count);
  count++;
}

// 7 Crie um programa que use um loop for para exibir a tabela de multiplicação de um número escolhido pelo usuário, de 1 a 10.

const tabuada2 = 3;

for (let i = 1; i <= 10; i++) {
  console.log(tabuada2 * i);
}
