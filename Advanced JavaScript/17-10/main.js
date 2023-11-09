const mapa = new Map();
mapa.set('nome', "lari");
mapa.set('idade', 18);

console.log(mapa);
console.log(mapa.get('idade'));
console.log(mapa.has('cidade'));

const set =  new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);

let dataAtual = new Date();
console.log(dataAtual.toLocaleString());
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth();
let dia = dataAtual.getDay();
let horas = dataAtual.getHours();
let min = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();
console.log(ano, mes, dia, horas, min, segundos);