//4.transforme uma string na lingua do P.

function Plang(){
    let portuguese = 'Eu sou Mackenzista'; 
    const newLanguage = portuguese.split(" ");
    let Planguage = "";
    for (let i=0; i < newLanguage.length; i++){
        if (newLanguage[i]!==" "){
            Planguage += "P" + newLanguage[i] + " ";
        }
    }
    console.log(Planguage)
}
Plang()