//ex.1 - crie uma função que receba 3 numeros e retorn a média aritmética deles
function media(n1, n2, n3){
    return (n1+n2+n3)/3
}
var result = media(5, 6, 10)
console.log("média aritmética: "+result);


//ex.2 - crie uma função que receba 6 números (3 notas e 3 pesos). Retorne a média ponderada.
function mediaPonderada(n1, n2, n3, p1, p2, p3){
    return (n1*p1+n2*p2+n3*p3)/p1+p2+p3
}
var restultMedia = mediaPonderada(10, 5, 10, 1, 2, 3)
console.log("média ponderada: "+restultMedia);


//ex.3 - crie uma função que receba uma string com valores 0s e 1s, representando um binário e devolva seu valor inteiro positivo. 
function binario(bin) {
    let res = 0;
    let pot = 1;

    for (let i = bin.length -1; i >= 0; i--){
        let num = parseInt(bin[i]);
        res += num * pot;
        pot *= 2;
    }
    return res;
}
let numero= "1011";
let resultBinario = binario(numero);
console.log("binário para inteiro: " + resultBinario);


//ex.4 - crie um algoritmo que receba uma frase e a mostre na lingua do P. 
function linguaP(frase){
    let palavra = frase.split(" ")
    var fraseP = ""
    for (var i = 0; i < frase.length; i++){
            fraseP += "P" + palavra[i] + " ";
        }
       console.log(fraseP)
}
let res = "Eu gosto do Mackenzie";
linguaP(res);


//5 - Faça um algoritmo que receba 3 strings e substiua na primeira, todas as ocorrencias da segunda pela terceira. 
function frase(a1, a2, a3){
    var result = ""
    for (var i = 0; i < a1.length; i++){
        var igual = true
        for (var x = 0; x < a2.length; x++){
            if (a1[i+x] != a2[x]){
                igual = false
                break;
            }
        }
        if (igual == true){
            result += a3;
            i += a2.length - 1
        } else{
            result += a1[i];
        }
    }
    return result
}
var a1 = "eu gosto de css";
var a2 = "css";
var a3 = "html";
var result = frase(a1, a2, a3)
console.log(result);


//6 - escreva um algoritmo que receba uma string com os numeros de um CPF e retorne se ele é válido ou não. 
function validarCPF(cpf){
    let cpfnum = cpf.replace(/\D/g, "");
    if (cpfnum.length !== 11){
        console.log("inválido");
    }

    let repetir = true;
    for (let i = 0; i < cpf.length -1; i++){
        if (cpf[i] !== cpf[i + 1]) {
            repetir = false
            break;
        }
        else{
            console.log("inválido")
        }

    let soma = 0
    for (let i = 0; i < 9; i++){
        soma+= parseInt(cpf[i]) * (10 - i)
    }

    let verificar; 
    if (soma % 11 < 2){
        verificar = 0
    } else{
        verificar = 11 - (soma % 11);
    }

    if (parseInt(cpf[10]) !== verificar) {
        console.log("inválido");
    }

    console.log("valido!");
}

let numeroCPF = "245.487.057-80";
let resultadoCPF = validarCPF(numeroCPF)
if (resultadoCPF = true){
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
  }
}
