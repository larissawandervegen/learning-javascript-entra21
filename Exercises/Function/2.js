let rendaTotal = 15000;
if (rendaTotal > 22000) {
    console.log(`A renda de ${rendaTotal} se enquadra na Classe A.`);
}else if (rendaTotal > 7100 && rendaTotal <= 22000) {
    console.log(`A renda de ${rendaTotal} se enquadra na Classe B.`);
}else if (rendaTotal > 2900 && rendaTotal <= 7100) {
    console.log(`A renda de ${rendaTotal} se enquadra na Classe C.`);
}else {
    console.log(`A renda de ${rendaTotal} se enquadra na Classe D.`);
}