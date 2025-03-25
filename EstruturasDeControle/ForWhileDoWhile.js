let pontosDeVida = 0;

for (let i = 0; i < 10; i++){
    pontosDeVida +=1;
    console.log("Tomou poção mágica, pontos de vida atuais: " + pontosDeVida);
}

console.log(pontosDeVida + " Totais");


console.log("------------------------------------------------------------------------------------------");

let pontosDeVida2 = 0;

while (pontosDeVida2 < 10){
    console.log("Tomou poção mágica, pontos de vida atuais: " + pontosDeVida2);
    pontosDeVida2 ++;    
}
console.log(pontosDeVida2 + " Totais");

console.log("------------------------------------------------------------------------------------------");

let pontosDeVida3 = 0;

do {
    console.log("Tomou poção mágica, pontos de vida atuais: " + pontosDeVida3);
    pontosDeVida3 ++;
} while (pontosDeVida3 < 10);

console.log(pontosDeVida3 + " Totais");