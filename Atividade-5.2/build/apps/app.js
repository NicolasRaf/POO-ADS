"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const io_1 = require("./utils/io");
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
    return (0, io_1.getNumber)(" >> ");
}
function main() {
    let option = showMenu();
    console.log(typeof (option));
}
main();
