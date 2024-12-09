import { Account } from "./account";

export class Client {
    private id: number;
    private name: string;
    private CPF: string;
    private dateBirth : Date;
    private accounts: Account[];
    
    constructor(num: number, name: string, cpf: string, dateBirth: Date, accounts: Account[]) {
        this.id = num;
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