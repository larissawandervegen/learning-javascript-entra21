// 1 filter
const numeros = [1,2,3,4,5,6,7,8];
const pares = numeros.filter((numero) => numero % 2 ===0);
console.log(pares);

// 2 Map
const nomes = ["lari", "esther", "pires", "ju"];
const caps = nomes.map((nomes) => nomes.toUpperCase());
console.log(caps);

//3 ForEach
const nomes2 = ["lari", "esther", "pires", "ju"];
nomes2.forEach(function(item, index){
    console.log(`Olá ${item}`);
});

//4 filter e map
const frutas = ["Maçã", "Banana", "Manga", "Maracujá"];
var frutasS = frutas.filter(frutasComS => (frutasComS.charAt(0) == "M")).map((frutasComS) => frutasComS.toUpperCase());
console.log(frutasS);

//5
const notas = [6,10,7,8];
const somaDasNotas = notas.reduce((cont, valor) => cont + valor, 0);
const calcularMedia = somaDasNotas / notas.length;
console.log(calcularMedia);

const alunosAprovados = notas.filter((nota) => nota >= 7);
console.log(alunosAprovados);

if (calcularMedia > 7) {
    console.log("Parabéns, você passou!");
}else{
    console.log("Você não passou!");
}

// const ap = calcularMedia.forEach(item => {
//     var teste = item >= 7? 'Aprovado!': 'Reprovado!'
//     console.log(teste);
// } );
