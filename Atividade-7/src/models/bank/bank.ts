import { Account } from "./account";
import { Client } from "./client";
import { SavingsAccount } from "./savingAccount";

export class Bank {
    private _accounts: Account[];
    private _clients: Client[];
    private _currentAccountId: number; 
    private _currentClientId: number;    


    constructor() {
        this._accounts = [];
        this._clients = [];
        this._currentAccountId = 1;
        this._currentClientId = 1;
    }

    public insertAccount( newAccount: Account ): void {
        newAccount.id = this._currentAccountId;
        this._accounts.push(newAccount);
        this._currentAccountId++;
    }

    public insertClient( newClient: Client): void {
        newClient.id = this._currentClientId;
        this._clients.push(newClient);
        this._currentClientId++;
    }

    public consultAccount( accNumber: string ): Account {
        let accountSearched!: Account;

        for (let account of this._accounts) {
            if (account.accNumber == accNumber) {
                accountSearched = account;
                break;
            }
        }
        return accountSearched;
    }

    private getAccountIndexByNumber( searchedNumber: string ): number | undefined {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._accounts[i].accNumber == searchedNumber) return i;
        }
    }

    public getClientndexByNumber( clientCPF: string ): number | undefined {
        for (let i = 0; i < this._accounts.length; i++) {
            if (this._clients[i].cpf == clientCPF) return i;
        }
    }

    public deleteAccount(accNumber: string): boolean {
        let accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);
        

        if (accountIndex !== undefined) { 
            const indexArraySize: number = this._accounts.length - 1;
    
            for (let i = accountIndex; i < indexArraySize; i++) {
                this._accounts[i] = this._accounts[i + 1];
            }
            this._accounts.pop(); 
            return true;
        }

        return false;
    }

    public deleteClient(clientCPF: string, deleteAccounts?: boolean): boolean {
        let clientIndex: number | undefined = this.getClientndexByNumber(clientCPF);
        if (clientIndex === undefined) return false;
    
        let clientAccounts = this._clients[clientIndex].accounts;

        for (const account of clientAccounts) {
            if (deleteAccounts) {
                this.deleteAccount(account.accNumber); 
            } else {
                account.disassociateClient();
            }
        }
        

        const indexArraySize: number = this._clients.length - 1;
        for (let i = clientIndex; i < indexArraySize; i++) {
                this._clients[i] = this._clients[i + 1];
        }
        
        this._clients.pop(); 
        return true;
    }

    public consultClientByCPF( searchedCPF: string ): Client {
        let clientSearched!: Client;

        for (let client of this._clients) {
            if (client.cpf === searchedCPF){
                clientSearched = client;
            }
        }

        return clientSearched;
    } 

    public getAllAccounts(): Account[] {
        return this._accounts;
    }

    public linkClientToAccount(  accNumber: string, clientCPF: string ): boolean {
        const foundClient: Client = this.consultClientByCPF(clientCPF);
        const foundAccount: Account = this.consultAccount(accNumber);

        if (foundAccount !== undefined && foundClient    !== undefined){
            if ( !foundClient.accounts.includes(foundAccount) ) foundClient.insertAccount(foundAccount);
            if ( foundAccount.client != foundClient ) foundAccount.client = foundClient;

            return true;
        }
        return false;
    }

    public updateClient(cpf: string, name?: string, dateBirth?: Date): void {
        const client: Client = this.consultClientByCPF(cpf);

        if (client != undefined){
            if (name != undefined) client.name = name;
            if (dateBirth != undefined) client.dateBirth = dateBirth;
        }
    }

    public bankWithdraw(value: number, accNumber: string): boolean {
        const accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);

        if (accountIndex != undefined) { 
            this._accounts[accountIndex].withdraw(value);
            return true;
        }

        return false;
    }

    public bankDeposit(value: number, accNumber: string): boolean {
        const accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);

        if (accountIndex != undefined) { 
            this._accounts[accountIndex].deposit(value);
            return true;
        }
        
        return false;
    }

    public bankEarnInterest( accNumber: string ): boolean {
        const account: Account = this.consultAccount(accNumber);

        if ( account != undefined && account instanceof SavingsAccount) {
            (account as SavingsAccount).earnInterest();
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
            originAccount = this._accounts[originAccountIndex];
            destinyAccount = this._accounts[destinyAccountIndex];

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
        const originAccount: Account = this._accounts[originAccountIndex];
    
        for (const destinyAccNumber of destinyAccounts) {
            const destinyAccountIndex: number | undefined = this.getAccountIndexByNumber(destinyAccNumber);
    
            if (destinyAccountIndex !== undefined) {
                const destinyAccount: Account = this._accounts[destinyAccountIndex];
    
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
        return this._accounts.length;
    }

    public getAccountsBalanceAmount(): number {
        return this._accounts.reduce((total, account) => total + account.balance, 0)
    }

    public balanceAccountsAvarage(): number {
        if (this.getAccountsAmount() <= 0) return 0;

        return this.getAccountsBalanceAmount() / this.getAccountsAmount();
    }

    public listAccountsDisassociated(): Account[] {
        let accounts: Account[] = [];

        for (let account of this._accounts) {
            if (account.client === undefined) {
                accounts.push(account);
            }
        }

        return accounts;
    }
}   

