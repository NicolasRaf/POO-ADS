"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionSelector = optionSelector;
const classes_1 = require("../classes");
const io_1 = require("./io");
function optionSelector(option, bank) {
    console.clear();
    switch (option) {
        case 1:
            const name = (0, io_1.getText)("Informe seu nome: ");
            const cpf = (0, io_1.getText)("Informe seu CPF: ");
            const dateBirth = new Date((0, io_1.getText)("Informe sua data de nascimento (YYYY-MM-DD): "));
            const client = new classes_1.Client(1, name, cpf, dateBirth);
            bank.insertClient(client);
            bank.insertAccount(new classes_1.Account("A-111", 100, client));
            console.log("Operação Finalizada!");
            break;
        case 2:
            console.log("Opção 2 selecionada: Depositar");
            break;
        case 3:
            console.log("Opção 3 selecionada: Sacar");
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
        default:
            console.log("Opção inválida! Por favor, selecione uma opção válida.");
    }
}
