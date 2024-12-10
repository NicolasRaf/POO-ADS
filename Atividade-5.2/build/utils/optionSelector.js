"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionSelector = optionSelector;
const classes_1 = require("../classes");
const io_1 = require("./io");
function optionSelector(option, bank) {
    console.clear();
    let client;
    let account;
    let accountNumber;
    switch (option) {
        case 1:
            const num = (0, io_1.getText)("Informe o número da conta: ");
            const initialBalance = (0, io_1.getNumber)("Informe o saldo inicial: ");
            bank.insertAccount(new classes_1.Account(num, initialBalance));
            break;
        case 2:
            accountNumber = (0, io_1.getText)("Digite o número da conta: ");
            account = bank.consultAccount(accountNumber);
            if (account) {
                console.log(account);
            }
            else {
                console.log("Conta não encontrada!");
            }
            break;
        case 3:
            accountNumber = (0, io_1.getText)("Digite o número da conta origem: ");
            let value = (0, io_1.getNumber)("Informe o valor a ser sacado: ");
            let result = bank.bankWithdraw(value, accountNumber);
            if (result) {
            }
            break;
        case 4:
            console.log("Opção 4 selecionada: Transferir");
            break;
        case 5:
            console.log("Opção 5 selecionada: Abrir nova conta");
            break;
        case 6:
            console.log("Opção 6 selecionada: Encerrar conta");
            break;
        case 7:
            console.log("Opção 7 selecionada: Sair");
            break;
        case 7:
            console.log("Opção 7 selecionada: Sair");
            break;
        default:
            console.log("Opção inválida! Por favor, selecione uma opção válida.");
    }
    console.log("\nOperação Finalizada!");
}
