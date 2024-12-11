"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes");
const io_1 = require("../utils/io");
const optionSelector_1 = require("../utils/optionSelector");
function showMenu() {
    console.clear();
    console.log(`  ==============================================`);
    console.log(`\tBem vindo! Selecione uma opção:`);
    console.log(`  ==============================================`);
    console.log(`\t  Contas \t\tClientes\n     -------------------   -------------------
    \t01-Inserir           08-Inserir
    \t02-Consultar         09-Consultar
    \t03-Sacar             10-Associar
    \t04-Depositar         
    \t05-Excluir           
    \t06-Transferir 
    \t07-Totalizações   
                                      0-Sair
  ==============================================\n`);
    return (0, io_1.getNumberInRange)(" >> ", 0, 11);
}
function main() {
    let option = showMenu();
    let myBank = new classes_1.Bank;
    while (option != 0) {
        (0, optionSelector_1.optionSelector)(option, myBank);
        (0, io_1.pressEnter)();
        option = showMenu();
    }
    console.log("Progama Finalizado...");
}
main();
