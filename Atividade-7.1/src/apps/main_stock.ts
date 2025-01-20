import { Product, PerishableProduct, Stock } from "../models";

function checkResult(result: boolean, trueFeedback: any, falseFeedback: any): void {
    result ? console.log(trueFeedback) : console.log(falseFeedback);
}

function main(): void {
    console.clear();

    const myStock = new Stock();

    const product1 = new Product(1, "Computador", 10, 1500);
    const product2 = new Product(2, "Mouse", 50, 25);

    myStock.addProduct(product1);
    myStock.addProduct(product2);

    const perishable1 = new PerishableProduct(3, "Coxinha", 20, 2.5, new Date("2025-01-31"));
    const perishable2 = new PerishableProduct(4, "Queijo", 15, 5, new Date("2024-12-31"));

    myStock.addProduct(perishable1);
    myStock.addProduct(perishable2);

    console.log("\n--- Detalhes ---\n");
    for (const product of myStock.products) {
        console.log(product.getDetails());
        console.log("-------------------------");
    }

    console.log("\n--- Restocando Produtos ---\n");
    checkResult(
        product1.restock(5),
        `Produto 1 reabastecido com sucesso..`,"Falha ao reabastecer o produto 1."
    );

    checkResult(
        perishable1.restock(10),
        `Produto perecível 1 reabastecido com sucesso.`,
        "Falha no reabastecimento de produto perecível 1."
    );

    console.log("\n--- Dando Baixa ---\n");
    checkResult(
        product2.reduceStock(10),
        `Baixa bem sucedida das existências do produto 2`,
        "Falha na baixa do o produto 2."
    );

    checkResult(
        perishable2.reduceStock(5),
        `Baixa bem sucedida das existências do produto perecível 2.`, "Falha na baixa do o produto perecível 2."
    );

    console.log("\n--- Verificando Validade ---\n");
    console.log(`O produto perecível 1 é válido: ${perishable1.isValid()}`);
    console.log(`O produto perecível 2 é válido: ${perishable2.isValid()}`);
}

main();
