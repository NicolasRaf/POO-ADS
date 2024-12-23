import { Account } from "./account";

export class Client {
    private id?: number;
    private name: string;
    private CPF: string;
    private dateBirth : Date;
    private accounts: Account[];
        
    constructor(name: string, cpf: string, dateBirth: Date, id?: number, accounts: Account[] = []) {
        this.id = id;
        this.name = name;
        this.CPF = cpf;
        this.dateBirth = dateBirth;
        this.accounts = accounts;
    }

    public getCPF(): string {
        return this.CPF;
    }

    public getAccounts(): Account[] {
        return this.accounts;
    }

    public insertAccount( newAccount: Account ): void {
        this.accounts.push( newAccount );
    }

    public setName( newName: string): void {
        this.name = newName;
    }

    public setDateBirth( newDateBirth: Date): void {
        this.dateBirth = newDateBirth;
    }

}