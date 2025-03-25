let possuiOvos = true;
let itensComprados= "";


if (possuiOvos) {
    itensComprados = "Leite"
} else {
    itensComprados = "Lasanha Congelada"
}

//possuiOvos ? itensComprados = "Leite" : itensComprados = "Lasanha Congelada"

console.log("Item comprado: " + itensComprados);

console.log("----------------------------------------------------------------------------------------------------");

let nivelDeFome = 3;

if(nivelDeFome === 1){
    console.log("Você está com pouca fome");
} else if(nivelDeFome === 2){
    console.log("Você está com fome");
} else {
    console.log("Você está com muita fome");
}
