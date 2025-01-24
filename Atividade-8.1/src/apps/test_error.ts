import { Bank, Account } from "../models";

function main(): void {
    
    const bank = new Bank();

    const account1 = new Account("A-111", 100);
    const account2 = new Account("A-222", 200);
 
    bank.insertAccount(account1);
    bank.insertAccount(account2);

    try {
        bank.transferBank(300, "A-111", "A-222");
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }

    console.log("Saldo da conta 1:", account1.balance);
    console.log("Saldo da conta 2:", account2.balance);
}

main();