let listaNumeros = [28 , 6, 2019];
let primeiroElemento = listaNumeros[0];
console.log(primeiroElemento);
listaNumeros.push(2020);
console.log(listaNumeros);
listaNumeros.pop();
console.log(listaNumeros);
let indiceDo28 = listaNumeros.indexOf(28);
console.log(indiceDo28);
listaNumeros.sort();
console.log(listaNumeros);
let listaAnos = [2021, 2022, 2023];
let listasConcatenadas = listaNumeros.concat(listaAnos);
console.log(listasConcatenadas);
listasConcatenadas[3] = 2020;
console.log(listasConcatenadas);
listasConcatenadas.splice()