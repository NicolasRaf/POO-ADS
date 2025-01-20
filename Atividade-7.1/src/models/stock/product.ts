export class Product {
    private _id: number;
    private _description: string;
    private _quantity: number;
    private _unitPrice: number;

    constructor(id: number, description: string, quantity: number, unitPrice: number) {
        this._id = id;
        this._description = description;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
    }

    get id(): number {
        return this._id;
    }

    public restock(amount: number): boolean {
        if (amount < 0) return false;
            
        this._quantity += amount;
        return true;
    }

    public reduceStock(amount: number): boolean {
        if (amount < 0 || amount > this._quantity) return false;
        
        this._quantity -= amount;
        return true;
    }

    public getDetails(): string {
        return `ID: ${this._id}\nDescription: ${this._description}\nQuantity: ${this._quantity}\nUnit Price: $${this._unitPrice.toFixed(2)}`;
    }
}