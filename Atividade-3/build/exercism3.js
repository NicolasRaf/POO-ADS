"use strict";
class Tasks {
    constructor() {
        // 6º Questão
        this.ola = () => console.log("Olá");
        // 7º Questão
        this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        this.filteredPairs = this.array.filter(num => num % 2 === 0);
    }
    // 1º Questão
    isPair(num) {
        return (num % 2 == 0); // Retorna true quando o numero for par, ter resto da divisão com 2 igual a 0.
    }
    // 2º Questão
    makeSalute(name, pronoun = "Sr") {
        console.log(`Olá, ${pronoun}. ${name}`);
    }
    // 3º Questão
    arrayNumbers(list) {
        let message = '';
        list.forEach((element, index) => {
            message += element;
            if (index < list.length - 1)
                message += '-';
        });
        return message;
    }
    // 4º Questão
    sum(x, y) {
        return x + y;
    }
    // 5º Questão
    displayParameters(...items) {
        items.forEach((element) => process.stdout.write(element + " "));
        console.log();
    }
}
function printNumberQuestion(num) {
    console.log("\x1b[32m%s\x1b[0m", `\n${num}ª Questão`);
}
function main() {
    console.clear();
    const taskManager = new Tasks;
    // 1º Questão
    printNumberQuestion(1);
    (taskManager.isPair(2)) ? console.log("O número é par!") : console.log("O número não é par!");
    // 2º Questão
    printNumberQuestion(2);
    taskManager.makeSalute("Ely", "Sr");
    taskManager.makeSalute("Rogério");
    taskManager.makeSalute("Sandra", "Sra");
    // 3º Questão
    printNumberQuestion(3);
    console.log(taskManager.arrayNumbers([1, 2, 3, 4, 5]));
    // 4º Questão
    printNumberQuestion(4);
    console.log(`${taskManager.sum(1)} --> Um parâmetro "Number", soma um número com "undefined" resultando em Nan.`);
    console.log(`${taskManager.sum(1, 2)} --> Dois parâmetros "Number", soma os dois números.`);
    console.log(`${taskManager.sum(1, "2")} --> Dois parâmetros, um "Number" e um "String", concatena em String os valores.`);
    // 5º Questão
    printNumberQuestion(5);
    taskManager.displayParameters("a", "b");
    taskManager.displayParameters("a", "b", "c");
    taskManager.displayParameters("a", "b", "c", "d");
    // 6º Questão
    printNumberQuestion(6);
    console.log("Função transformada em \"Arrow\".");
    taskManager.ola();
    // 7º Questão
    printNumberQuestion(7);
    console.log(`Array original --> [${taskManager.array}]`);
    console.log(`Array filtrado --> [${taskManager.filteredPairs}]`);
    // 8º Questão
    printNumberQuestion(8);
    const list = [1, 3, 5, 7, 9, 11, 13, 15];
    console.log(`Array original --> [${list}]\n`);
    console.log(`Array dobrado --> [${list.map((num) => num * 2)}]`);
    console.log(`Soma do array --> ${list.reduce((acumullator, num) => acumullator + num, 0)}`);
}
main();
