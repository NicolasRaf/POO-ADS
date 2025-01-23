import { Bank, Account } from "src/models";

function main(): void {
    // Criar banco
    const bank = new Bank();

    // Criar contas
    const account1 = new Account("123", "Titular 1", 50); // Conta com saldo inicial de 50
    const account2 = new Account("456", "Titular 2", 100); // Conta com saldo inicial de 100

    // Adicionar contas ao banco
    bank.addAccount(account1);
    bank.addAccount(account2);

    // Tentar transferir mais do que o saldo da conta 1
    try {
        bank.transfer("123", "456", 200); // Tentativa de transferir 200 (saldo insuficiente)
    } catch (error) {
        console.error("Erro durante a transferência:", error.message);
    }

    // Exibir saldos finais
    console.log("Saldo da conta 1:", account1.getBalance());
    console.log("Saldo da conta 2:", account2.getBalance());
}

main();
