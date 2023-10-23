const funcaoAnonima = function(a,b){
    return a * b;
};
console.log(funcaoAnonima(3, 5));

// arrow function
const multiplicacao = (a,b) => a * b;
const resultado = multiplicacao (7 , 8);
console.log(resultado);

//funções prontas
const texto = "Lari";
console.log(texto.charAt(3));

// substring
const mensagem = "Hello, world!";
console.log(mensagem.substring(0,5)); //Exibe Hello

// slipt
const lista = "Maçã, Banana, Manga";
const frutas = lista.split(" ")

//map
const numeros = [1,2,3];
const dobrados = numeros.map((numero) => numero * 2);
console.log(dobrados);

//filter
const numeros1 = [1,2,3,4,5,6,7,8];
const pares = numeros.filter((numero) => numero % 2 ===0);
console.log(pares);

//forEach
const frutas1 = ["Maçã", "Banana"];
frutas1.forEach(function(item, index, array){
    console.log(item, index);
});