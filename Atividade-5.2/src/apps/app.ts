import prompt from "prompt-sync";
import { Account, Bank } from "../classes";
import { getNumber } from "./utils/io";


function showMenu(): number {
    console.clear();
    let input = prompt();   

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
    

    return getNumber(" >> ");
}

function main() {
    let option = showMenu();

    console.log(typeof(option));

}

main();