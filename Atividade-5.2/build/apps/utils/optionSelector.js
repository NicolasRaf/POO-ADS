"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionSelector = void 0;
function optionSelector(option) {
    console.clear();
    switch (option) {
        case 1:
            console.log("Opção 1 selecionada: Consultar saldo");
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
exports.optionSelector = optionSelector;
