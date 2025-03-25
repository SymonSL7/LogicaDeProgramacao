let personagemDragonBall= [
    ["Goku", "Saiyajin", "Kamehameha", "Genki Dama"],
    ["Vegeta", "Saiyajin", "Final Flash", "Big Bang Attack"],
    ["Gohan", "Saiyajin", "Masenko", "Kamehameha"],
    ["Piccolo", "Namekuseijin", "Makankosappo", "Explosão de Ki"],
    ["Kuririn", "Terráqueo", "Kienzan", "Genki Dama"],
    ["Yamcha", "Terráqueo", "Kamehameha", "Kikoho"],
    ["Tenshinhan", "Terráqueo", "Kikoho", "Kamehameha"],
    ["Mestre Kame", "Terráqueo", "Kamehameha", "Genki Dama"],
    ["Bulma", "Terráqueo", "Nenhum", "Nenhum"],
    ["Chi-Chi", "Terráqueo", "Nenhum", "Nenhum"],
    ["Videl", "Terráqueo", "Nenhum", "Nenhum"],
    ["Mr. Satan", "Terráqueo", "Nenhum", "Nenhum"],
    ["Dende", "Namekuseijin", "Nenhum", "Nenhum"],
    ["Shenlong", "Dragão", "Nenhum", "Nenhum"]

]

for (let i = 0; i < personagemDragonBall.length; i++) {
console.log("O personagem " + personagemDragonBall[i][0] + " é da raça " + personagemDragonBall[i][1] + 
" e possui os golpes " + personagemDragonBall[i][2] + " e " + personagemDragonBall[i][3] + ".")
};

console.log("---------------------------------------------------------------------------------------------------------");

for (let i = 0; i < personagemDragonBall.length; i++) {
    if (personagemDragonBall[i][1] == "Saiyajin") {
        console.log("O personagem " + personagemDragonBall[i][0] + " é um " + personagemDragonBall[i][1] + ".")
    }
}

console.log("---------------------------------------------------------------------------------------------------------");

for (let i = 0; i < personagemDragonBall.length; i++) {
    if (personagemDragonBall[i][2] == "Kamehameha") {
        console.log("O personagem " + personagemDragonBall[i][0] + " possui o golpe " + personagemDragonBall[i][2] + ".")
    }
}

