function soma(numA, numB) {
    let somatorio = numA + numB;
    return somatorio;
}

let resultado = soma(10, 20);
console.log(`O Resultado dessa função é: ${resultado}`);


console.log("-----------------------------------------------------------------------------------");

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0];
    return firstName;
}

let nome = "Symon Silva Lima";
let primeiroNome = getFirstName(nome, " ");
console.log(`Seja bem-vindo: ${primeiroNome}`);

let nome2 = "Maria-da-Silva";
let primeiroNome2 = getFirstName(nome2, "-");
console.log(`Seja bem-vindo: ${primeiroNome2}`);

