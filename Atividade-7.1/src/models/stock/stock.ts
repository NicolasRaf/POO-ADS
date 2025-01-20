import { Product } from "../index";

export class Stock {
    private _products: Product[] = [];

    get products(): Product[] {
        return this._products;
    }

    public addProduct(product: Product): void {
        this._products.push(product);
    }

    public findProductById(id: number): Product | boolean {
        for (let i = 0; i < this._products.length; i++) {
            if (this._products[i].id == id) return this._products[i];
        }

        return false;
    }
}