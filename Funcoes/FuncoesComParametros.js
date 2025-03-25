function torrar(pao, valor, nome = "Desconhecido") {
    console.log("Torrada feita com " + pao);
    console.log("Torrada feita por " + nome);
    console.log("O Valor total é: " + valor);
}

torrar("Pão de forma", 10.90, "João");
torrar("Pão francês", 5.90, "Maria");
torrar("Pão integral",7.90);

console.log("-----------------------------------------------------------------------------------");

function createStringConnection(databaseName, user, pass){
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`);
}


createStringConnection("db_products", "admin", "admin123");