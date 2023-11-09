const numeros = [10, 8, 6];

const principal = (array, parametro) =>{
    let resultado = parametro(array);
    console.log(resultado);
}


const callback = (arrayNum) => {
    const soma = arrayNum.reduce((total, valor) => total + valor, 0);
    const media = soma / arrayNum.length;
    return media
}
principal(numeros, callback)