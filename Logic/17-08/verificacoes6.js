let ano = 2020;
if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 !== 0){
    console.log(`O ano ${ano} é bissexto.`);
}else{
    console.log("O ano inserido não é bissexto.");
}