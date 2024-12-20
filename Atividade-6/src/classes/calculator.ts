export class Calculator {
    private operand1: number;
    private operand2: number;

    constructor( operand1: number, operand2: number) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }   

    public sum(): number {
        return this.operand1 + this.operand2;
    }

    public multiplication(): number {
        return this.operand1 * this.operand2;
    }
}