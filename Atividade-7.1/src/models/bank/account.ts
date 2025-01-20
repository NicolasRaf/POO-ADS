import { Client } from "./client";

export class Account {
    private _id?: number;
    private _accNumber: string;
    protected _balance: number;
    private _client?: Client;

    constructor(accNumber: string, balance: number, client?: Client, id?: number) {
        this._id = id;
        this._accNumber = accNumber;        
        this._balance = balance;
        this._client = client;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get balance() {
        return this._balance;
    }

    public get id(): number | undefined {
        return this._id;
    }

    public get accNumber(): string {
        return this._accNumber;
    }

    public get client(): Client | undefined {
        return this._client;
    }

    public set client( client: Client ) {
        this._client = client;
    }

    public set balance(newBalance: number) {
        this._balance = newBalance;
    }

    public set accNumber(NewAccNumber: string) {
        this._accNumber = NewAccNumber;
    }

    public withdraw(value: number): boolean {
        if (value <= 0 || isNaN(value)) return false;
        
        if (this._balance >= value) {
            this._balance -= value;
            return true;
        }
        return false;
    }

    public deposit(value: number): void {
        this._balance = this._balance + value;
    }

    public disassociateClient(): void {
        this._client = undefined;
    }

    public transfer( destinyAccount: Account, value: number): void {
        this.deposit(value);
        destinyAccount.deposit(value);
    }  

    public getFormattedAttributes(type: string = "C"): string {
        const formattedAttributes: string = `${type};` +`${this._accNumber};` + `${this._balance.toFixed(2)};`

        if (this._client) return formattedAttributes + this._client?.getFormattedAttributes();
        return formattedAttributes + "NA;000;0000-00-00";
    }
}
