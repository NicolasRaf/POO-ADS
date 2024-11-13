class Tasks{

    // 1º Questão
    public isPair(num: number): boolean {
        return (num % 2 == 0); // Retorna true quando o numero for par, ter resto da divisão com 2 igual a 0.
    }

    // 2º Questão
    public makeSalute(name: string, pronoun:string = "Sr"){
        console.log(`Olá, ${pronoun}. ${name}`);
    }

    // 3º Questão
    public arrayNumbers(list: number[]): string {
        let message: string = '';
    
        list.forEach((element, index) => {
            message += element;
            
            if (index < list.length - 1) message += '-';
        });
    
        return message;
    }

    // 4º Questão
    public sum(x: number, y?: any): number {
        return x + y;
       }

    // 5º Questão
    public displayParameters(...items: any): void{
        items.forEach( (element: any) => process.stdout.write(element + " "));
        console.log();    
    }

    // 6º Questão
    ola: any = () => console.log("Olá");


    // 7º Questão
    array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    filteredPairs = this.array.filter(num => num % 2 === 0);
}

function printNumberQuestion(num: number): void{
    console.log("\x1b[32m%s\x1b[0m", `\n${num}ª Questão`);
}

function main(){
    console.clear();
    const taskManager = new Tasks;

    printNumberQuestion(1);
    (taskManager.isPair(2)) ? console.log("O número é par!") : console.log("O número não é par!");

    printNumberQuestion(2);
    taskManager.makeSalute("Ely", "Sr");
    taskManager.makeSalute("Rogério");
    taskManager.makeSalute("Sandra", "Sra");

    printNumberQuestion(3);
    console.log(taskManager.arrayNumbers([1,2,3,4,5]));

    printNumberQuestion(4);
    console.log(`${taskManager.sum(1)} --> Um parâmetro "Number", soma um número com "undefined" resultando em Nan.`);
    console.log(`${taskManager.sum(1, 2)} --> Dois parâmetros "Number", soma os dois números.`);
    console.log(`${taskManager.sum(1, "2")} --> Dois parâmetros, um "Number" e um "String", concatena em String os valores.`);

    printNumberQuestion(5);
    taskManager.displayParameters("a", "b");
    taskManager.displayParameters("a", "b", "c");
    taskManager.displayParameters("a", "b", "c", "d");

    printNumberQuestion(6);
    console.log("Função transformada em \"Arrow\".")
    taskManager.ola();

    printNumberQuestion(7);
    console.log(`Array original --> [${taskManager.array}]`)
    console.log(`Array filtrado --> [${taskManager.filteredPairs}]`); 

    printNumberQuestion(8);
    const list: number[] = [1,3,5,7,9,11,13,15];
    console.log(`Array original --> [${list}]\n`)

    console.log(`Array dobrado --> [${list.map((num: number) => num * 2)}]`);
    console.log(`Soma do array --> ${list.reduce((acumullator: number, num: number) => acumullator + num, 0)}`);

}   

main();