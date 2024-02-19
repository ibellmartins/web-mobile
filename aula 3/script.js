
/*
há 4 formar de declarar variaveis: 
automaticamente
var --> só use se precisar dar suporte pra navegadores antigos - variaveis sao sempre GLOBAIS, ou seja, podem ser declarada mais de uma vez 
{
    var x = 10 
}
let --> só use se nao puder usar o const -
variaveis tem escopo de bloco 
{
    let nome = "Mackenzie"   
}
DEVEM ser declaradas antes do uso 
tem escopo de bloco, entao com o let antes ele vai executar o bloco 

const -->se o tipo de dados nao for alterado nunca (array ou objeto) 


x = 1 
var x
//hoisting -> içar a variavel para o topo do codigo, podendo usá-la antes de declará-la. isso só é possível com var

const pi = 3.14 //variavel const DEVE ser declarada e instanciada ao mesmo tempo E const nao define um valor constante necessariamente, e sim define uma referencia constante a um valor. 


//declaracao de objetos
let aluno = {
    nome: "Pedro",
    tia: 123123
}
aluno.nome //Pedro

//operadores aritmeticos
var a = 10 
var b =  5 

operador mod (módulo) gera o resto da divisao nao o resultado dela:
var c = a % b 

operador de incremento: 
var a = 10
a++

decremento: 
var b = 20
b--

funcoes: 
function mostra(texto){ 
    console.log(texto)
}
mostra("eu sou muito linda") //vai atribuir a string no parametro texto

function some(a,b){
    return a + b
}

//aron function: vamos usar bastante em react 
let c = soma(2, b) => {
     a + b
}
let c = soma(2,4)
*/


function soma(a, b){
    return a + b
}

const subtracao = (a, b) => {  //usamos const para funcoes  
    return a - b
}

const multiplicacao = (a, b) => {
    return a * b
} 


const divisao = (a,b) => a/b    //caso tenha so uma linha de codigo nem precisa de bloco 

var resultado = soma(2,3)
console.log(resultado)

resultado = subtracao(10, 3)
console.log(resultado)

resultado = multiplicacao(4,5)
console.log(resultado)

resultado = soma( subtracao(10,4), 2) //sempre ver de dentro pra fora 

let frequencia = 78
if (frequencia >= 75) {
    console.log("frequencia ok")
} else {
    console.log("frequencia nao ta ok")
}

//if aninhado
let nota = 8.6
if (nota < 6) {
    console.log("nao aprovado")
} else if (nota >= 6 && nota < 7.5){
    console.log("sub")
} else {
    console.log("aprovado")
}

//for
console.log("for")
for (var i=0; i < 10; i++){
    console.log(i)
}

console.log("while")
var a = 0 
while (a < 10){
    console.log(a)
    a++
}

console.log("do while")
var a = 0
do {
    console.log(a)
    a++
} while (a < 10)


//switch case
var op = 1
switch(op){
    case 1:
        console.log("acabar a aula")
        break
    case 2:
        console.log("continuar a aula")
        break
    default:
        console.log("selecione 1 ou 2")
}