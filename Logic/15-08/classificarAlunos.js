// let nota = 100;
// if (nota >= 90){
//     console.log('A classificação é: A.');
// }else if (nota >= 80){
//     console.log('A classificação é: B.');
// }else if (nota>=70){
//     console.log('A classificação é: C.');
// }else if (nota >=60){
//     console.log('A classificação é: D');
// }else{
//     console.log('A classificação é: F.');
// }

let nota = 62;
switch (true) {
    case nota >= 90:
        console.log('A classificação é: A.');
        break;
    case nota >= 80:
        console.log('A classificação é: B.');
        break
    case nota>=70:
        console.log('A classificação é: C.');
        break
    case nota >=60:
        console.log('A classificação é: D');
        break
    default:
        console.log('A classificação é: F.');
        break;
}