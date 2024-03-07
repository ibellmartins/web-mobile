//faziamos isso no primeiro dia, agora tentaremos otimizar isso usando MAP
// const numbers = [1, 2 ,3, 4, 5, 6]

// function potencia(num){
//     return num * num
// }

// for (i=0; i<numbers.length; i++){
//     newNumbers.push(potencia(numbers[i]))
// }

// console.log(numbers)
// console.log(newNumbers)


//agora com o map 
// const numbers = [1, 2 ,3, 4, 5, 6]

// function potencia(num){  //maneira 1
//     return num * num
// }
// let potencia2 = (num) => {return num * num}  //maneira 2
// let potencia3 = num => num * num //maneira 3

// let newNumbers = []
// newNumbers = numbers.map(potencia)

// console.log(numbers)
// console.log(newNumbers)


//percorre uma array e devolve a media das notas dos alunos - usamos o map quando queremos uma array para cada 
// let alunos = [
//     {nome: "isabella", notas:[10,9.5,10]},
//     {nome: "joao", notas: [8, 4.5, 10]},
//     {nome: "heloiza", notas:[10, 9.8,6,7]},
//     {nome: "ana", notas:[8, 5.5, 10, 4.5]}
// ]

// let calculaMedia = (aluno) => {
//     var m = 0 
//     for(var i=0; i<aluno.notas.length; i++){
//         m += aluno.notas[i]
//     }
//     m = m / aluno.notas.length
//     return {
//         nome: aluno.nome,
//         notas: aluno.notas,
//         media: m 
//     }
// }

// alunos = alunos.map(calculaMedia)
// console.log(alunos)


//fazendo a mesma coisa usando reduce - usamos quuando queremos retornar so uma variavel com as infos passadas 
let alunos = [
    {nome: "isabella", notas:[10,9.5,10]},
    {nome: "joao", notas: [8, 4.5, 10]},
    {nome: "heloiza", notas:[10, 9.8,6,7]},
    {nome: "ana", notas:[8, 5.5, 10, 4.5]}
]

alunos = alunos.map((aluno) => {
    return {
        nome: aluno.nome,
        notas: aluno.notas,
        media: aluno.notas.reduce((acumulador, nota)=> acumulador += nota) / aluno.notas.length
    }
})
console.log(alunos)

let alunosAprovados = alunos.filter(aluno => aluno.media > 7.5)
console.log(alunosAprovados)
