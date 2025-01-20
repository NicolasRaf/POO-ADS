import { Account } from "./account";

export class BonusAccount extends Account {
    private _bonusRate: number = 0.03; 

    get bonusRate(): number {
        return this._bonusRate;
    }

    public deposit(value: number): boolean {
        if (value <= 0 || isNaN(value)) return false;

        const bonus: number = value * this._bonusRate;
        const totalDeposit: number = value + bonus;
        
        this._balance += totalDeposit;
        return true;
    }

    public getFormattedAttributes(): string {
        return super.getFormattedAttributes("BA") + `;${this._bonusRate}`;
    }
}

