import { Account, Client } from "../index";

export class SavingsAccount extends Account {
    private _interestRate: number;

    constructor(number: string, balance: number, interestRate: number, client?: Client) {
        super(number, balance, client);
        this._interestRate = interestRate;
    }

    public earnInterest() {
        let Interest: number = this.balance * this._interestRate/100;
        this.deposit(Interest);        
    }

    public getFormattedAttributes(): string {
        return super.getFormattedAttributes("CP") + `;${this._interestRate}`;
    }
}
