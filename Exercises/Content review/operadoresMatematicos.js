// 1 Somar dois números e imprimir o resultado.
// criando as variáveis
let num1 = 5;
let num2 = 5;

// podemos criar uma variável para guardar o resultado da nossa operação;
let resultado = num1 + num2
console.log('O resultado é: ', resultado);

// 2 Calcular a diferença entre dois números e imprimir o resultado.
let nume1 = 5;
let nume2 = 5;

// podemos imprimir o resultado da nossa operação diretamente no console.log;
console.log('O resultado é: ', nume1 - nume2);

//3 Multiplicar dois números e imprimir o resultado.
let numero1 = 6;
let numero2 = 7;

console.log('O resultado é: ', numero1 * numero2);

//4 Dividir dois números e imprimir o resultado.
let nmr1 = 6;
let nmr2 = 7;

console.log('O resultado é: ', nmr1 / nmr2);

//5 Calcular o resto da divisão de dois números e imprimir o resultado
let nmro1 = 6;
let nmro2 = 7;

console.log('O resultado é: ', nmro1 % nmro2);


// 6 Elevar um número a uma potência e imprimir o resultado
let nm1 = 2;
let potencia = 3;

console.log(`A potência de ${nm1} elevado a ${potencia} é: `, nm1 ** potencia);


// 7 Calcular a média de três números e imprimir o resultado
let nota1 = 8;
let nota2 = 8;
let nota3 = 8;

// coloquei o '()' para evitar que a nota3 seja dividida por 3 antes que todas as notas sejam somadas;
let calculoMedia = (nota1 + nota2 + nota3) / 3;

console.log('A média das notas é: ', calculoMedia);


// 8 Converter uma temperatura de Celsius para Fahrenheit e imprimir o resultado
let celsius = 5;
let fahrenheit = (celsius * 9/5) + 32;

console.log(`A temperatura de ${celsius}º Celsius em Farehnheit é de: `, fahrenheit);


// 9 Calcular a área de um retângulo e imprimir o resultado
let largura = 5;
let altura = 6;

let area = 5 * 6;
console.log('A área do retângulo é de: ', area);


// 10 Se o preço de um produto aumentou de R$ 80,00 para R$ 96,00, qual foi o aumento percentual?

// Preço inicial e final do produto
let precoInicial = 80.00;
let precoFinal = 96.00;

// Calcula o aumento em reais
let aumentoEmReais = precoFinal - precoInicial;

// Calcula o aumento percentual
let aumentoPercentual = (aumentoEmReais / precoInicial) * 100;

// Exibe o resultado
console.log(`O aumento percentual foi de ${aumentoPercentual.toFixed(2)}%`);

