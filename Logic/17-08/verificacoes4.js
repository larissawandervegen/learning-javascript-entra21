let lado1 = 3;
let lado2 = 4;
let lado3 = 5;

if (lado1 == lado2 && lado1 == lado3) {
    console.log('Esse triângulo é equilátero.');
}else if (lado1 == lado2 || lado1 == lado3){
    console.log('Esse triângulo é isóceles.');
}else{
    console.log('Esse triângulo é escaleno.');
}