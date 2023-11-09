let preco = 200;
let desconto = 12;

if (preco >= 100 && desconto >= 10) {
    let precoComDesconto = preco - (preco * (desconto / 100));
    console.log('O preço com desconto é igual a', precoComDesconto);
}else{
    console.log('Não é possível aplicar o desconto.');
}