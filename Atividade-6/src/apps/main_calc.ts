import { Calculator } from "../classes";

function main() {
    console.clear();

    const calc1: Calculator = new Calculator(10, 20);
    const calc2: Calculator = new Calculator(5, 3);

  
    console.log("Calculadora 1: Soma dos operandos 10 e 20:");
    console.log(calc1.sum());

    console.log("Calculadora 2: Soma dos operandos 5 e 3:");
    console.log(calc2.sum());

    console.log("\nCalculadora 1: Multiplicação dos operandos 10 e 20:");
    console.log(calc1.multiplication());

    console.log("Calculadora 2: Multiplicação dos operandos 5 e 3:");
    console.log(calc2.multiplication());

    console.log("\nCriando nova instância com operandos 15 e 25...");
    const calc3: Calculator = new Calculator(15, 25);

    console.log("Calculadora 3: Soma dos operandos 15 e 25:");
    console.log(calc3.sum());

    console.log("Calculadora 3: Multiplicação dos operandos 15 e 25:");
    console.log(calc3.multiplication());
}

main();
