let nome = "Larissa";
let idade = 18;
let salario = 1000;
let sexo = "F";
let estadoCivil = "S";

if (nome.length > 3) {
    console.log(nome);
}else{
    console.log("Nome inválido!");
}if (idade > 0 && idade < 150) {
    console.log(idade);
} else {
    console.log("Idade inválida!");
}if (salario > 0) {
    console.log(salario);
} else {
    console.log("Salário inválido!");
}if (sexo === "F" || sexo ==="f" || sexo ==="M" || sexo==="m") {
    console.log(sexo);
} else {
    console.log("Sexo inválido!");
}if (estadoCivil === "S" || estadoCivil === "s" || estadoCivil === "C" || estadoCivil==="c" || estadoCivil==="V" || estadoCivil==="v" || estadoCivil==="D" || estadoCivil==="d") {
    console.log(estadoCivil);
} else {
    console.log("Estado Civíl inválido!");
}