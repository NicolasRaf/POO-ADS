import { Account } from "./account";
import { Client } from "./client";

export class Bank {
    private accounts: Account[];
    private clients: Client[];    

    constructor() {
        this.accounts = [];
        this.clients = []
    }

     public insertAccount( newAccount: Account ): void {
        this.accounts.push(newAccount);
    }

    public insertClient( newClient: Client): void {
        this.clients.push(newClient);
    }

    public consultAccount( searchedID: number ): Account {
        let accountSearched!: Account;

        for (let account of this.accounts) {
            if (account.getId() == searchedID) {
                accountSearched = account;
                break;
            }
        }
        return accountSearched;
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

    public associateClientAccount(  accountId: number, clientCPF: string ): void {
        const foundClient: Client = this.consultClientByCPF(clientCPF);
        const foundAccount: Account = this.consultAccount(accountId);

        if ( !foundClient.getAccounts().includes(foundAccount) ) foundClient.insertAccount(foundAccount);

        if ( foundAccount.consultClient() != foundClient ) foundAccount.associateClient(foundClient);
        

    }
}