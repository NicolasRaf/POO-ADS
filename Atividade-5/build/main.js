"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./classes/index");
function main() {
    console.clear();
    let account1 = new index_1.Account(1, 1000, new index_1.Client(1, "João Silva", "123.456.789-00", new Date("1990-01-01"), []));
    let account2 = new index_1.Account(2, 500, new index_1.Client(2, "Nicolas Rafel", "654.789.321-15", new Date("2006-06-13"), []));
    let testBank = new index_1.Bank();
    testBank.insertAccount(account1);
    testBank.insertAccount(account2);
    console.log(testBank.consultAccount(1));
    console.log(testBank.consultAccount(2));
    console.log("\nTodas contas do Banco:\n");
    console.log(testBank.getAllAccounts());
}
main();
/**
 * Clientes
 *
 * "João Silva", "123.456.789-00", new Date("1990-01-01"), [])
 * "Maria Oliveira", "987.654.321-00", new Date("1985-05-15"), [])
 * "Carlos Souza", "321.654.987-00", new Date("1992-03-20"), []))
 * "Nicolas Rafel", "654.789.321-15", new Date("2006-06-13"), []))
 */ 
