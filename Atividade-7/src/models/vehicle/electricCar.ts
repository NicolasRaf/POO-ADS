import { Car } from "./car";

export class ElectricCar extends Car {
    private _batteryLife: number;

    constructor ( plate: string, year: number, model: string,  batteryLife: number ) {
        super(plate, year, model);
        this._batteryLife = batteryLife;
    }

    get batteryLife(): number {
        return this._batteryLife;
    }
}