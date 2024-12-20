export class Hour {
    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    constructor ( hours: number, minutes: number, seconds: number ){
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }

    public getHours(): number {
        return this._hours;
    }

    public getMinutes(): number {
        return this._minutes;
    }

    public getSeconds(): number {
        return this._seconds;
    }

    public consultHour(): string {
        return this._hours + ":" + this._minutes + ":" + this._seconds;
    }

}