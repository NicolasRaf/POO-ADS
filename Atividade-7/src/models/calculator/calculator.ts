export class Calculator {
    protected _operand1: number;
    protected _operand2: number;

    constructor( operand1: number, operand2: number) {
        this._operand1 = operand1;
        this._operand2 = operand2;
    }   

    public sum(): number {
        return this._operand1 + this._operand2;
    }

    public multiplication(): number {
        return this._operand1 * this._operand2;
    }
}