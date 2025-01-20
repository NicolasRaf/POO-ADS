import { Product } from "./product";

export class PerishableProduct extends Product {
    private expiryDate: Date;

    constructor(id: number, description: string, quantity: number, unitPrice: number, expiryDate: Date) {
        super(id, description, quantity, unitPrice);
        this.expiryDate = expiryDate;
    }

    public isValid(): boolean {
        return this.expiryDate > new Date();
    }

    public restock(amount: number): boolean {
        if (! this.isValid()) return false;

        super.restock(amount);
        return true
    }

    public reduceStock(amount: number): boolean {
        if (! this.isValid()) return false;

        super.reduceStock(amount);
        return true;    
    }

    public getDetails(): string {
        const validity = this.isValid() ? "Valid" : "Expired";
        return `${super.getDetails()}\nExpiry Date: ${this.expiryDate.toISOString()}\nStatus: ${validity}`;
    }
}
