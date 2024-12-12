"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../classes/index");
function main() {
    console.clear();
    // Criar instância do banco
    let testBank = new index_1.Bank();
    // Criar clientes
    let client1 = new index_1.Client("Ely Miranda", "123.456.789-00", new Date("1990-01-01"), 1);
    let client2 = new index_1.Client("Nicolas Rafael", "654.789.321-15", new Date("2006-06-13"), 2);
    // Inserir clientes no banco
    testBank.insertClient(client1);
    testBank.insertClient(client2);
    // Criar contas
    let account1 = new index_1.Account("A-111", 1000, client1, 1);
    let account2 = new index_1.Account("B-222", 500, client2, 2);
    // Inserir contas no banco
    testBank.insertAccount(account1);
    testBank.insertAccount(account2);
    // Testar consulta de conta
    console.log("Conta consultada pelo número A-111:");
    console.log(testBank.consultAccount("A-111"));
    // Testar consulta de cliente pelo CPF
    console.log("\nCliente consultado pelo CPF '123.456.789-00':");
    console.log(testBank.consultClientByCPF("123.456.789-00"));
    // Associar contas aos clientes
    console.log("\nAssociando conta ao cliente...");
    testBank.associateClientAccount("A-111", "123.456.789-00");
    testBank.associateClientAccount("B-222", "654.789.321-15");
    // Verificar contas associadas
    console.log("\nContas do cliente Ely Miranda:");
    console.log(client1.getAccounts());
    console.log("\nContas do cliente Nicolas Rafael:");
    console.log(client2.getAccounts());
    // Verificar os saldos antes da transferência
    console.log("\nSaldos antes da transferência:");
    console.log("Saldo da conta A-111:", account1.checkBalance());
    console.log("Saldo da conta B-222:", account2.checkBalance());
    // Testar uma transferência
    console.log("\nRealizando uma transferência de 200 da conta A-111 para a conta B-222...");
    const transferSuccess = testBank.transferBank(200, "A-111", "B-222");
    console.log(`Transferência realizada com sucesso: ${transferSuccess}`);
    // Verificar os saldos após a transferência
    console.log("\nSaldos após a transferência:");
    console.log("Saldo da conta A-111:", account1.checkBalance());
    console.log("Saldo da conta B-222:", account2.checkBalance());
    // Testar o cálculo da média de saldo
    console.log("\nMédia de saldo das contas no banco:");
    console.log(testBank.balanceAccountsAvarage());
    // Testar a exclusão de uma conta
    console.log("\nExcluindo a conta B-222...");
    testBank.deleteAccount("B-222");
    account2 = null;
    console.log("Contas após a exclusão:");
    console.log(testBank.getAllAccounts());
    // Verificando número de contas
    console.log("Número de contas no banco:");
    console.log(testBank.getAccountsAmount());
    // Total de saldo no banco
    console.log("Soma total dos saldos das contas:");
    console.log(testBank.getAccountsBalanceAmount());
    // Atualizando dados de um cliente
    console.log("\nAtualizando nome do cliente com CPF '123.456.789-00'...");
    testBank.updateClient("123.456.789-00", "Ely Santana", new Date("1990-01-01"));
    console.log(testBank.consultClientByCPF("123.456.789-00"));
    // Testando saque via banco
    console.log("\nRealizando saque de 300 da conta A-111...");
    testBank.bankWithdraw(300, "A-111");
    console.log(account1.checkBalance());
    // Testando deposito via banco
    console.log("\nRealizando depósito de 150 na conta A-111...");
    testBank.bankDeposit(150, "A-111");
    console.log(account1.checkBalance());
    let client3 = new index_1.Client("Silvio Santos", "000.111.222-33", new Date("1930-12-12"), 3);
    testBank.insertClient(client3);
    let account3 = new index_1.Account("C-333", 9999999, client3, 3);
    testBank.insertAccount(account3);
    // Transderencia de uma conta para varias destino
    console.log("\nRealizando transferência de 500 para várias contas...");
    const transferResults = testBank.transferBankArray(500, "C-333", ["B-222", "A-111"]);
    console.log("Resultado das transferências: " + transferResults);
    // Verificar os saldos após a transferência
    console.log("\nSaldos após a transferência:");
    console.log("Saldo da conta A-111:", account1.checkBalance());
    console.log("Saldo da conta C-333:", account3.checkBalance());
    console.log("\nEstado da conta B-222 =", account2);
}
main();
