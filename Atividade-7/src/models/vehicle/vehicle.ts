export class Vehicle {
    private _plate: string;
    private _year: number;

    constructor( plate: string, year: number) {
        this._year = year;
        this._plate = plate;
    }

    get plate(): string {
        return this._plate;
    }

    get year(): number {
        return this._year;
    }
}
