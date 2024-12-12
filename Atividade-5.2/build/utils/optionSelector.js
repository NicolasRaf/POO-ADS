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
    let value;
    let result;
    let searchedCPF;
    switch (option) {
        case 1:
            const num = (0, io_1.getText)("Informe o número da conta: ");
            const initialBalance = (0, io_1.getNumber)("Informe o saldo inicial: ");
            bank.insertAccount(new classes_1.Account(num, initialBalance));
            break;
        case 2:
            accountNumber = (0, io_1.getText)("Digite o número da conta: ");
            account = bank.consultAccount(accountNumber);
            checkResult(account != undefined, account, "Conta não encontrada!");
            break;
        case 3:
            accountNumber = (0, io_1.getText)("Digite o número da conta origem: ");
            value = (0, io_1.getNumber)("Informe o valor a ser sacado: ");
            result = bank.bankWithdraw(value, accountNumber);
            checkResult(result, "Saque realizado com sucesso!", "Falha ao realizar saque!");
            break;
        case 4:
            accountNumber = (0, io_1.getText)("Digite o número da conta: ");
            value = (0, io_1.getNumber)("Infore o valor a ser depositado: ");
            result = bank.bankDeposit(value, accountNumber);
            checkResult(result, "Deposito realizado com sucesso!", "Falha ao realizar deposito!");
            break;
        case 5:
            accountNumber = (0, io_1.getText)("Digite o número da conta: ");
            result = bank.deleteAccount(accountNumber);
            checkResult(result, "Conta excluída com sucesso!", "Falha ao exluir conta!");
            break;
        case 6:
            let origimAccountNumber = (0, io_1.getText)("Informe o número da conta origem: ");
            let destinyAccountNumber = (0, io_1.getText)("Informe o número da conta destino: ");
            value = (0, io_1.getNumber)("Digite o valor a ser transferido: ");
            result = bank.transferBank(value, origimAccountNumber, destinyAccountNumber);
            checkResult(result, "Tranferência realizada com sucesso!", "Falha ao realizar a transferências entre as contas!");
            break;
        case 7:
            console.log(`Total de Saldo das contas no banco: ${bank.getAccountsBalanceAmount()}`);
            console.log(`Media de Saldo das contas no banco: ${bank.balanceAccountsAvarage()}`);
            break;
        case 8:
            const clientName = (0, io_1.getText)("Digite o nome do cliente: ");
            const cpf = (0, io_1.getText)("Digite o CPF do cliente: ");
            const dateBirth = (0, io_1.getText)("Informe a data de nascimento(YYYY-MM-DD): ");
            bank.insertClient(new classes_1.Client(clientName, cpf, new Date(dateBirth)));
            break;
        case 9:
            searchedCPF = (0, io_1.getText)("Informe o CPF do cliente para consulta: ");
            client = bank.consultClientByCPF(searchedCPF);
            checkResult(client != undefined, client, "Falha ao consultar cliente");
            break;
        case 10:
            searchedCPF = (0, io_1.getText)("Informe o CPF do cliente: ");
            accountNumber = (0, io_1.getText)("Informe o número da conta: ");
            bank.associateClientAccount(accountNumber, searchedCPF);
            break;
        default:
            console.log("Opção inválida! Por favor, selecione uma opção válida.");
    }
    console.log("\nOperação Finalizada!");
}
function checkResult(result, trueFeedback, falseFeedback) {
    if (result) {
        console.log(trueFeedback);
    }
    else {
        console.log(falseFeedback);
    }
}
