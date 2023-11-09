let numeros = [0,1,2,3,4];
let numEscolhido = 2;
let resposta = false;
for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] === numEscolhido) {
    resposta = true;
    break;
   }
}
//console.log("O menor número da lista é", numEscolhido);
if (resposta) {
    console.log("O número", numEscolhido, "está presente na lista.");
}else{
    console.log("O número", numEscolhido, "não está presente na lista.");
}