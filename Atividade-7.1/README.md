# __Atividade 7.1__

### 4ª Questão | Letra b - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-7.1/src/models/bank/taxAccount.ts)

```
export class TaxAccount extends Account {
    private _taxRate: number = 0.38/100;

    get taxRate(): number {
        return this._taxRate;
    }

    public withdraw(value: number): boolean {
        if (value <= 0 || isNaN(value)) return false;

        const surcharge: number = value * this._taxRate;
        const amount: number = value + surcharge;

        if (this._balance < amount) return false;

        super.withdraw(amount);
        return true
    }
}
```
Foi necessário transformar o o atributo da classe pai `balance` em `protected` para ter acesso a ele na classe, além de adicionar a opção de inserir ContaImposto ao adicionar conta pelo `app.ts`. 

---

### 4ª Questão | Letra c/d/e - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-7.1/src/models/bank/bank.ts)

```
public addFromFile(): string[] {

    const dir: string = "../../src/utils/accounts.txt"
    let data: string[] = readFileSync(dir, "utf-8").split("\n");

    const numberAccAdded: string[] = [];

    for (let line of data) {
        if (!line.trim()) continue;
        
        const accounts: string[] = line.split(";");
        const accountType: string = accounts[0];  
        const accNumber: string = accounts[1];
        const balance: number = Number(accounts[2]);
        const client = new Client(accounts[3], accounts[4], new Date(accounts[5]));

        if (accountType === "C") {
            this.insertAccount(new Account(accNumber, balance, client));
        } else if (accountType === "CP") {
            const interestRate: number = Number(accounts[6]);
            this.insertAccount(new SavingsAccount(accNumber, balance, interestRate, client));
        } else if (accountType === "CI") {
            const yieldRate: number = Number(accounts[6]);
            this.insertAccount(new TaxAccount(accNumber, balance, client, yieldRate));
        }

        numberAccAdded.push(accNumber);
    }

    return numberAccAdded;
}
```

---

### 5ª Questão - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-7.1/src/apps/main_stock.ts)

Implementação dos produtos junto com estoque:

```
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
```