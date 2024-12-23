import { pressEnter } from "../utils/io";
import { OptionSelector } from "../classes";

function main() {
    let optionSelector = new OptionSelector();
    let option = optionSelector.showMenu();

    while (option != 0) {
        optionSelector.handleOption(option);
        pressEnter();
        option = optionSelector.showMenu();
    }
    console.log("Programa Finalizado...");
}

main(); 