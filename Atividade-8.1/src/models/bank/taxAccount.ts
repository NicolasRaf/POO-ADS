import { Account } from "./account";

export class TaxAccount extends Account {
    private _taxRate: number = 0.38/100;

    get taxRate(): number {
        return this._taxRate;
    }

    public withdraw(value: number): boolean {
        if (value <= 0 || isNaN(value)) return false;

        const surcharge: number = value * this._taxRate;
        const amount: number = value + surcharge;

        if (this._balance < amount) return false;

        super.withdraw(amount);
        return true
    }

    public getFormattedAttributes(): string {
        return super.getFormattedAttributes("CI") + `;${this._taxRate}`;  
    }
}