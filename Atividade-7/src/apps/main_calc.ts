import { Calculator, ScientificCalculator } from "../models";

function main() {
    console.clear();

    const calc: Calculator = new Calculator(10, 20);
    const calcSc: ScientificCalculator = new ScientificCalculator(5, 3);

  
    console.log("Calculadora Simples: Soma dos operandos 10 e 20:");
    console.log(calc.sum());

    console.log("\nCalculadora Científica: Elevando 5 ao expoente 3:");
    console.log(calcSc.exponentiate());
}

main();
