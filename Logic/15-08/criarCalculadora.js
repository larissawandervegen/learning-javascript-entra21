let operador = '+'
let numero1 = 2;
let numero2 = 1;
switch (operador) {
    case '+':
        console.log('Esse operador é de adição:', numero1 + numero2);
        break; 
    case '-':
        console.log('Esse operador é de subtração:', numero1 - numero2);
        break
    case '*':
        console.log('Esse operador é de multiplicação:', numero1 * numero2);
        break
    case '/':
        console.log('Esse operador é de divisão:', numero1 / numero2);
        break
    default:
        console.log('Operador não reconhecido!');
        break
}