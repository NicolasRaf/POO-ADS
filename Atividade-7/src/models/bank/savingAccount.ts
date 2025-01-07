import { Account } from "./account";

export class SavingsAccount extends Account {
    private _intrestRate: number;

    constructor(number: string, balance: number, taxaDeJuros: number) {
        super(number, balance);
        this._intrestRate = taxaDeJuros;
    }

    public earnInterest() {
        let Interest: number = this.balance * this._intrestRate/100;
        this.deposit(Interest);        
    }
}
