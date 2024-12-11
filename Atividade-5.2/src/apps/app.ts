import { Bank } from "../classes";
import { getNumberInRange, pressEnter } from "../utils/io";
import { optionSelector } from "../utils/optionSelector";


function showMenu(): number {
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

    return getNumberInRange(" >> ", 0, 11);
}

function main() {
    let option = showMenu();
    let myBank: Bank = new Bank;

    while (option != 0) {
        optionSelector(option, myBank);
        pressEnter();
        option = showMenu();
    }
    console.log("Progama Finalizado...");
}

main();