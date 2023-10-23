// // criação de variáveis
// let nome1 = 'Larissa';
// let idade = 18;
// console.log(`Olá, meu nome é ${nome1} e eu tenho ${idade} anos.`);

// let destino = 'Gramado';
// let dias = 10;
// let orcamento = 2000;
// console.log(`Estou planejando uma viagem para ${destino} por ${dias} dias, com um orçamento de R$${orcamento}.`);

// let produto = 'notebook';
// let preco = 3.000;
// let parcelas = 12;
// console.log(`Estou interessado em comprar um ${produto} por ${preco}, dividido em ${parcelas} parcelas.`);

// let nome2 = 'Larissa';
// let profissao = 'Menor aprendiz';
// let experiencia = 1;
// console.log(`Olá, sou a ${nome2}, ${profissao} com ${experiencia} ano de experiência. `);

// let numero1 = 5;
// let numero2 = 10;
// console.log(`A soma dos números ${numero1} + ${numero2} é igual a ${numero1 + numero2}.`);

// let numero3 = 5;
// let numero4 = 4;
// console.log(`A multiplicação dos número é igual ${numero3 * numero4}.`);

// let numero5 = 5;
// let numero6 = 4;
// console.log(`A divisão dos número é igual ${numero5 / numero6}.`);

// let numero7 = 5;
// let numero8 = 4;
// console.log(`O resto da divisão dos número é igual ${numero7 % numero8}.`);

// let numero9 = 5;
// let numero10 = 4;
// console.log(`O número ${numero9} elevado a ${numero10} é igual a ${numero9 ** numero10}.`);

// let numero11 = 7;
// let numero12 = 8;
// let numero13 = 9;
// let media = (numero11 + numero12 + numero13) / 3
// console.log(`A média dos números é igual a ${media}`);

// let celcius = 20;
// let fahrenheit = (celcius * 9 / 5) + 32;
// console.log(`A temperatura ${celcius} em graus Celcius convertida em graus Fahrenheit é igual a ${fahrenheit}`);

// let altura = 10;
// let largura = 5;
// let area = altura * largura;
// console.log(`A área do retângulo é igual a ${area}.`);

// verificações
// let numero = 4;
// if (numero % 2 == 0) {
//     console.log(`O número ${numero} é par.`);
// }else{
//     console.log(`O número ${numero} ímpar.`);
// }

// let numero = -1;
// if (numero < 0 ) {
//     console.log(`O número ${numero} é negativo.`);
// }else if ( numero == 0) {
//     console.log(`O número ${numero} é zero.`);
// } else {
//     console.log(`O número ${numero} é positivo.`);
// }

// let lado1 = 3;
// let lado2 = 4;
// let lado3 = 5;

// if (lado1 == lado2 && lado1 == lado3) {
//     console.log('Esse triângulo é equilátero.');
// }else if (lado1 == lado2 || lado1 == lado3){
//     console.log('Esse triângulo é isóceles.');
// }else{
//     console.log('Esse triângulo é escaleno.');
// }

// let preco = 200;
// let desconto = 12;

// if (preco >= 100 && desconto >= 10) {
//     let precoComDesconto = preco - (preco * (desconto / 100));
//     console.log('O preço com desconto é igual a', precoComDesconto);
// }else{
//     console.log('Não é possível aplicar o desconto.');
// }

// let ano = 2020;
// if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 !== 0){
//     console.log(`O ano ${ano} é bissexto.`);
// }else{
//     console.log("O ano inserido não é bissexto.");
// }
 
// let mes = 'Abril'
// if (mes === 'Dezembro' || mes === 'Janeiro' || mes === 'Fevereiro' || mes === 'Março' ) {
//     console.log('A estação do ano é verão.');
// }else if (mes === 'Abril' || mes === 'Maio' || mes === 'Junho') {
//     console.log('A estação do ano é outono.');
// } else if (mes === 'Julho' || mes === 'Agosto' || mes === 'Setembro'){
//     console.log('A estação do ano é inverno.');
// }else{
//     console.log('A estação do ano é primavera.');
// }

// for (let i = 1; i <=10; i++){
//     console.log(i);
// }

// for (let i = 0; i <=20; i += 2){
//     console.log(i);
// }

// let contador = 10;
// while (contador >= 1){
//     console.log(contador);
//     contador--;
// }

// let contador=2;
// do {
//     console.log(contador);
//     contador+=2;
// } while (contador <= 10);

// let soma = 0;
// for (let i = 1; i <= 10; i++) {
//     soma+= i;
// }
// console.log(soma)

// let multiplicador = 5;
// let contador = 0;
// while (contador <= 10) {
//     let resultado = multiplicador * contador;
//     console.log(`${multiplicador} x ${contador} =`, resultado);
//     contador++
// }

// let listaElementos = [1,2,3,4,5,6]
// for (let index = 0; index < listaElementos.length; index++) {
//     const numero = listaElementos[index];
//     console.log(numero);
// }