import { Calculator } from "./calculator";

export class ScientificCalculator extends Calculator {
    
    constructor( operand1: number, operand2: number) {
        super( operand1, operand2 );
    } 

    public exponentiate(): number {
        return this._operand1 ** this._operand2;
    }
}