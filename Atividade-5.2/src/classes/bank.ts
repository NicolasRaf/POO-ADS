import { Account } from "./account";
import { Client } from "./client";

export class Bank {
    private accounts: Account[];
    private clients: Client[];    

    constructor() {
        this.accounts = [];
        this.clients = [];
    }

    public insertAccount( newAccount: Account ): void {
        this.accounts.push(newAccount);
    }

    public insertClient( newClient: Client): void {
        this.clients.push(newClient);
    }

    public consultAccount( accNumber: string ): Account {
        let accountSearched!: Account;

        for (let account of this.accounts) {
            if (account.getAccNumber() == accNumber) {
                accountSearched = account;
                break;
            }
        }
        return accountSearched;
    }

    public getAccountIndexByNumber( searchedNumber: string ): number | undefined {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].getAccNumber() == searchedNumber) return i;
        }
    }

    public deleteAccount(accNumber: string): boolean {
        let accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);
    
        if (accountIndex !== undefined) { 
            const indexArraySize: number = this.accounts.length - 1;
    
            for (let i = accountIndex; i < indexArraySize; i++) {
                this.accounts[i] = this.accounts[i + 1];
            }
            this.accounts.pop(); 
            return true;
        }

        return false;
    }

    public consultClientByCPF( searchedCPF: string ): Client {
        let clientSearched!: Client;

        for (let client of this.clients) {
            if (client.getCPF() == searchedCPF){
                clientSearched = client;
            }
        }

        return clientSearched;
    } 

    public getAllAccounts(): Account[] {
        return this.accounts;
    }

    public associateClientAccount(  accNumber: string, clientCPF: string ): void {
        const foundClient: Client = this.consultClientByCPF(clientCPF);
        const foundAccount: Account = this.consultAccount(accNumber);

        if ( !foundClient.getAccounts().includes(foundAccount) ) foundClient.insertAccount(foundAccount);

        if ( foundAccount.consultClient() != foundClient ) foundAccount.associateClient(foundClient);
    }

    public updateClient(cpf: string, name?: string, dateBirth?: Date): void {
        const client: Client = this.consultClientByCPF(cpf);

        if (client != undefined){
            if (name != undefined) client.setName(name);
            if (dateBirth != undefined) client.setDateBirth(dateBirth);
        }
    }

    public bankWithdraw(value: number, accNumber: string): boolean {
        const accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);

        if (accountIndex != undefined) { 
            this.accounts[accountIndex].withdraw(value);
            return true;
        }

        return false;
    }

    public bankDeposit(value: number, accNumber: string): boolean {
        const accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);

        if (accountIndex != undefined) { 
            this.accounts[accountIndex].deposit(value);
            return true;
        }
        
        return false;
    }

    public transferBank(value: number, originAccNumber: string, destinyAccNumber: string ): boolean {
        if (value <= 0 || isNaN(value)) return false;

        const originAccountIndex: number | undefined = this.getAccountIndexByNumber(originAccNumber);
        const destinyAccountIndex: number | undefined = this.getAccountIndexByNumber(destinyAccNumber);
        let originAccount: Account;
        let destinyAccount: Account;

        if (originAccountIndex != undefined && destinyAccountIndex != undefined) {
            originAccount = this.accounts[originAccountIndex];
            destinyAccount = this.accounts[destinyAccountIndex];

            if (originAccount.withdraw(value)) {
                destinyAccount.deposit(value);
                return true;
            }
        }
        return false;
    }

    public transferBankArray(value: number, originAccNumber: string, destinyAccounts: string[]): boolean[] | boolean {

        const results: boolean[] = []; 
        const originAccountIndex: number | undefined = this.getAccountIndexByNumber(originAccNumber);

        if (originAccountIndex === undefined) {
            return false;
        }
        const originAccount: Account = this.accounts[originAccountIndex];
    
        for (const destinyAccNumber of destinyAccounts) {
            const destinyAccountIndex: number | undefined = this.getAccountIndexByNumber(destinyAccNumber);
    
            if (destinyAccountIndex !== undefined) {
                const destinyAccount: Account = this.accounts[destinyAccountIndex];
    
                if (originAccount.withdraw(value)) {
                    destinyAccount.deposit(value);
                    results.push(true); 
                } else {
                    results.push(false);
                    continue;
                }
            } else {
                results.push(false);
                continue; 
            }
        }
    
        return results; 
    }
    
    public getAccountsAmount(): number {
        return this.accounts.length;
    }

    public getAccountsBalanceAmount(): number {
        return this.accounts.reduce((total, account) => total + account.checkBalance(), 0)
    }

    public balanceAccountsAvarage(): number {
        if (this.getAccountsAmount() <= 0) return 0;

        return this.getAccountsBalanceAmount() / this.getAccountsAmount();
    }

}   

