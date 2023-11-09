let frutas = [
    ['Banana', 'Maçã'],
    ['Laranja', 'Abacaxi'],
    ['Pessêgo', "Caqui"]
]
let valores = "";
for (let L = 0; L <= 2; L++) {
    for (let C = 0; C <= 1; C++) {
        valores += frutas[L][C] + '\n'
    }
}
console.log(valores);