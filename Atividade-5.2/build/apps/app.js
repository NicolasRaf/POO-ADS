"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const io_1 = require("./utils/io");
const optionSelector_1 = require("./utils/optionSelector");
function showMenu() {
    console.clear();
    let input = (0, prompt_sync_1.default)();
    console.log(`  ============================================`);
    console.log(`\tBem vindo! Selecione uma opção:`);
    console.log(`  ============================================`);
    console.log(`
    \t1-Inserir         5-Excluir
    \t2-Consultar       6-Transferir
    \t3-Sacar           7-Totalizações
    \t4-Depositar       8-Sair
    `);
    console.log(`  ============================================\n`);
    return (0, io_1.getNumberInRange)(" >> ", 1, 8);
}
function main() {
    let option = showMenu();
    while (option != 8) {
        (0, optionSelector_1.optionSelector)(option);
        (0, io_1.pressEnter)();
        option = showMenu();
    }
    console.log("Progama Finalizado...");
}
main();
