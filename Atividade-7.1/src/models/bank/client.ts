import { Account } from "./account";

export class Client {
    private _id?: number;
    private _name: string;
    private _cpf: string;
    private _dateBirth : Date;
    private _accounts: Account[];
        
    constructor(name: string, cpf: string, dateBirth: Date, id?: number, accounts: Account[] = []) {
        this._id = id;
        this._name = name;
        this._cpf = cpf;
        this._dateBirth = dateBirth;
        this._accounts = accounts;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public get accounts(): Account[] {
        return this._accounts;
    }

    public set name( newName: string) {
        this._name = newName;
    }

    public set dateBirth( newDateBirth: Date) {
        this._dateBirth = newDateBirth;
    }

    public set id( newId: number ){
        this._id = newId;
    }

    public insertAccount( newAccount: Account ): void {
        this._accounts.push( newAccount );
    }
}   