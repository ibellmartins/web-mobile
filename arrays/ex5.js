//5.Crie uma função que receba uma string com valores 0s e 1s, representando um binário e devolva seu valor inteiro positivo.

function binario(){
    let bin = '10101';
    const bin_sep = bin.split("");
    let num = 0;
    for (let i = 0; i < bin_sep.length; i++){
        let valor = bin_sep[i];
        let indice = bin_sep.length - 1 - i;
        num += parseInt(valor) * 2 ** indice
    }
    console.log(num)
}
binario()