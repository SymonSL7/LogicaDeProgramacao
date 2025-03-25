let fruta = "Morango";

switch (fruta) {
    case "Laranja":
        console.log("Suco de Laranja");
        break;

        case "Banana":
        case "Morango":    
        console.log("Vitamina de " + fruta);
        break;

        case "Maçã":
        console.log("Suco de Maça");
        break;

    default:
        console.log("Desculpe, não temos essa fruta");
        break;
}