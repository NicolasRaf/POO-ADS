import { Account } from "./account";

export class SavingsAccount extends Account {
    private _interestRate: number;

    constructor(number: string, balance: number, interestRate: number) {
        super(number, balance);
        this._interestRate = interestRate;
    }

    public earnInterest() {
        let Interest: number = this.balance * this._interestRate/100;
        this.deposit(Interest);        
    }
}
