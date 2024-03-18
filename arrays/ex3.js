//3.faça a soma dos caracteres de uma string 
function sumCaract(){
    let phrase = 'Eu sou Mackenzista';
    const newPhrase = phrase.split("");
    count = 0
    for (let i=0; i < newPhrase.length; i++){
        if (newPhrase[i] !== " "){
            count ++
        }
    }
    console.log("soma dos caracteres:", count)
}
sumCaract()