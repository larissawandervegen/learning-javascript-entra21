function verificaVogais(letra) {
    let letraMiniscula = letra.LocaleLowerCase();
    if (letraMiniscula === "a" || letraMiniscula === "e" ||letraMiniscula === "i" ||letraMiniscula === "o" ||letraMiniscula === "u") {
        return "É vogal."
    }else{
        return "É consoante."
    }
}
console.log(verificaVogais("l"));