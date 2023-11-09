const numeros = [1, 2, 3, 4, 5, 6];

const principal = (array, parametro) =>{
    let resultado = parametro(array);
    console.log(resultado);
}


const callback = (arrayNum) => {
    const pares = arrayNum.filter (numeros => (numeros % 2) ===0);
    return pares
}
principal(numeros, callback)