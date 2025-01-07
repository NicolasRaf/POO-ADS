import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
    private _model: string;

    constructor( plate: string, year: number, model: string ) {
        super(plate, year);
        this._model = model;
    }

    get model(): string {
        return this._model;
    }
}