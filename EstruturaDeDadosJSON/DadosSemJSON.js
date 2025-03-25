let name = "Symon";
let age = 27;
let products = ["Mouse Sem Fio", "Teclado Sem Fio", "Monitor Curvo 23.6"];
let productValues = [49.9,74.99,759.90];



function generateInvoice(name, products,productsValues, age){
    console.log(`O comprador é : ${name}`);
    console.log(`A idade é : ${age}`);
    console.log("--------------------")
    console.log(`O produto é : ${products[0]}`);
    console.log(`O valor é : ${productsValues[0]}`);

}

generateInvoice(name, products, productValues,age);