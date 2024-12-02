"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor() {
        this.accounts = [];
        this.clients = [];
    }
    consultAccount(searchedID) {
        let accountSearched;
        for (let account of this.accounts) {
            if (account.getId() == searchedID) {
                accountSearched = account;
                break;
            }
        }
        return accountSearched;
    }
    consultClientByCPF(searchedCPF) {
        let clientSearched;
        for (let client of this.clients) {
            if (client.getCPF() == searchedCPF) {
                clientSearched = client;
            }
        }
        return clientSearched;
    }
    getAllAccounts() {
        return this.accounts;
    }
    associateClientAccount(accountId, clientCPF) {
        const foundClient = this.consultClientByCPF(clientCPF);
        const foundAccount = this.consultAccount(accountId);
        if (!foundClient.getAccounts().includes(foundAccount))
            foundClient.insertAccount(foundAccount);
        if (foundAccount.consultClient() != foundClient)
            foundAccount.associateClient(foundClient);
    }
    listClientAccounts(cpf) {
        return this.consultClientByCPF(cpf).getAccounts();
    }
    totalClientBalance(cpf) {
        const clientAccounts = this.consultClientByCPF(cpf).getAccounts();
        let total = 0;
        for (let account of clientAccounts) {
            total += account.checkBalance();
        }
        return total;
    }
    insertClient(newClient) {
        for (let client of this.clients) {
            if (newClient.getCPF() === client.getCPF() || newClient.getId() === client.getId()) {
                console.log("Cliente já incluso no banco!");
                return;
            }
        }
        this.clients.push(newClient);
    }
    insertAccount(newAccount) {
        this.accounts.push(newAccount);
    }
}
exports.Bank = Bank;
