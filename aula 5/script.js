//objetos e arrays 

let disciplina1 = {
    nome: "web mobile",
    professor: { //se houver um objeto que tem mais de uma atribuicao, tranforme ele em um objeto tambem, com infos dentro.
        nome: "pedro cacique",
        email: "pedro.cacique@mackenzie.br"
    }, 
    local: {
        predio: 31,
        sala: 102
    }
}

let disciplina2 = {
    nome: "web mobile",
    professor: { //se houver um objeto que tem mais de uma atribuicao, tranforme ele em um objeto tambem, com infos dentro.
        nome: "joao paulo ",
        email: "pedro.cacique@mackenzie.br"
    }, 
    local: {
        predio: 35,
        sala: 109
    }
}

const disciplinas = [ disciplina1]
disciplinas.push(disciplina2)

for (i=0; i < disciplinas.length; i++){
    mostra(disciplinas[i])
}

function mostra(disciplina){
    let conteudo = document.getElementById("conteudo")
    // conteudo.innerHTML = disciplina.professor.email //acessando a nomenclatura de um objeto com outro
    // conteudo.innerHTML = disciplina.nome 
    // conteudo.innerHTML = "<h1>" + disciplina.nome + "</h1>" //concatenando strings. melhor jeito de fazer: 
    // conteudo.innerHTML = `<h1>${disciplina.professor.nome}</h1>`
    let str = `<div> <h1>${disciplina.professor.nome}</h1>`
    str += `<p>${disciplina.professor.nome} (<em>${disciplina.local.sala}</em>)</p>`
    str += `<p>Local: prédio: ${disciplina.local.predio}, sala ${disciplina.local.sala}</p>`
    str += "</div>"

    conteudo.innerHTML += str
}


/*
//objetos

let disciplina1 = {
    nome: "web mobile",
    professor: { //se houver um objeto que tem mais de uma atribuicao, tranforme ele em um objeto tambem, com infos dentro.
        nome: "pedro cacique",
        email: "pedro.cacique@mackenzie.br"
    }, 
    local: {
        predio: 31,
        sala: 102
    }
}

let disciplina2 = {
    nome: "web mobile",
    professor: { //se houver um objeto que tem mais de uma atribuicao, tranforme ele em um objeto tambem, com infos dentro.
        nome: "joao paulo ",
        email: "pedro.cacique@mackenzie.br"
    }, 
    local: {
        predio: 35,
        sala: 109
    }
}

mostra(disciplina1)
mostra(disciplina2)

function mostra(disciplina){
    let conteudo = document.getElementById("conteudo")
    // conteudo.innerHTML = disciplina.professor.email //acessando a nomenclatura de um objeto com outro
    // conteudo.innerHTML = disciplina.nome 
    // conteudo.innerHTML = "<h1>" + disciplina.nome + "</h1>" //concatenando strings. melhor jeito de fazer: 
    // conteudo.innerHTML = `<h1>${disciplina.professor.nome}</h1>`
    let str = `<div> <h1>${disciplina.professor.nome}</h1>`
    str += `<p>${disciplina.professor.nome} (<em>${disciplina.local.sala}</em>)</p>`
    str += `<p>Local: prédio: ${disciplina.local.predio}, sala ${disciplina.local.sala}</p>`
    str += "</div>"

    conteudo.innerHTML += str
}
*/
