//6.Faça um algoritmo que receba 3 strings e substiua na primeira, todas as ocorrencias da segunda pela terceira. 

function substitui(){
    let s1 = "eu amo a isa";
    let s2 = "isa";
    let s3 = "sofia";
    let newStr ="";
    let news1 = s1.split(" ");
    for (let i = 0; i < news1.length; i++){
        if (news1[i] == s2){
            news1[i] = s3;
        }
        newStr += news1[i] + " "
    }
    console.log(newStr)
}
substitui()