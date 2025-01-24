import { Bank, Account } from "../models";

function main(): void {
    // Criar banco
    const bank = new Bank();

    // Criar contas
    const account1 = new Account("A-111", 100);
    const account2 = new Account("A-222", 200);
    
    // Adicionar contas ao banco
    bank.insertAccount(account1);
    bank.insertAccount(account2);

    // Tentar transferir mais do que o saldo da conta 1
    bank.transferBank(300, "A-111", "A-222");

    // Exibir saldos finais
    console.log("Saldo da conta 1:", account1.balance);
    console.log("Saldo da conta 2:", account2.balance);
}

main();
