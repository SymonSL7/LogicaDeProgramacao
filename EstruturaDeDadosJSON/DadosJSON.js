let invoice = {
    name: "Symon",
    age: 27,
    products: {
        0: ["Mouse Sem Fio", 49.90],
        1: ["Teclado Sem Fio", 74.99],
        2: ["Monitor Curvo 23.6", 759.90],
        3: ["Cadeira Gamer", 1250.00],
    }
   
}

function generateInvoice(invoice) {
    console.log(`O comprador é : ${invoice.name}`);
    console.log(`A idade é : ${invoice.age} anos`);
    console.log("--------------------");
    for (let i in invoice.products){
        let [productName, productPrice] = invoice.products[i];
        console.log(`Produto: ${productName} - Preço: R$ ${productPrice}`);
    }
}

generateInvoice(invoice);