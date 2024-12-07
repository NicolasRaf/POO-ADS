import { Account, Bank, Client } from "./classes/index";

function main() {
    console.clear();

    // Criar instância do banco
    let testBank: Bank = new Bank();

    // Criar clientes
    let client1 = new Client(1, "Ely Miranda", "123.456.789-00", new Date("1990-01-01"), []);
    let client2 = new Client(2, "Nicolas Rafael", "654.789.321-15", new Date("2006-06-13"), []);

    // Inserir clientes no banco
    testBank.insertClient(client1);
    testBank.insertClient(client2);

    // Criar contas
    let account1 = new Account(1, 1000, client1);
    let account2 = new Account(2, 500, client2);

    // Inserir contas no banco
    testBank.insertAccount(account1);
    testBank.insertAccount(account2);

    // Testar consulta de conta
    console.log("Conta consultada pelo ID 1:");
    console.log(testBank.consultAccount(1));

    // Testar consulta de cliente pelo CPF
    console.log("\nCliente consultado pelo CPF '123.456.789-00':");
    console.log(testBank.consultClientByCPF("123.456.789-00"));

    // Associar contas aos clientes
    console.log("\nAssociando conta ao cliente...");
    testBank.associateClientAccount(1, "123.456.789-00");
    testBank.associateClientAccount(2, "654.789.321-15");

    // Verificar contas associadas
    console.log("\nContas do cliente Ely Miranda:");
    console.log(client1.getAccounts());

    console.log("\nContas do cliente Nicolas Rafael:");
    console.log(client2.getAccounts());

    // Listar todas as contas no banco
    console.log("\nTodas as contas no banco:");
    console.log(testBank.getAllAccounts());
}

main();