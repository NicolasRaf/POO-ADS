import { Bank } from "../classes";
import { getNumberInRange, pressEnter } from "../utils/io";
import { optionSelector } from "../utils/optionSelector";


function showMenu(): number {
    console.clear();

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
    

    return getNumberInRange(" >> ", 1, 8);
}

function main() {
    let option = showMenu();
    let myBank: Bank = new Bank;

    while (option != 8) {
        optionSelector(option, myBank);
        pressEnter();
        option = showMenu();
    }
    console.log("Progama Finalizado...");
}

main();