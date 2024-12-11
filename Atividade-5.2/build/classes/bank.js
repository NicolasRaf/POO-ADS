"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor() {
        this.accounts = [];
        this.clients = [];
    }
    insertAccount(newAccount) {
        this.accounts.push(newAccount);
    }
    insertClient(newClient) {
        this.clients.push(newClient);
    }
    consultAccount(accNumber) {
        let accountSearched;
        for (let account of this.accounts) {
            if (account.getAccNumber() == accNumber) {
                accountSearched = account;
                break;
            }
        }
        return accountSearched;
    }
    getAccountIndexByNumber(searchedNumber) {
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].getAccNumber() == searchedNumber)
                return i;
        }
    }
    deleteAccount(accNumber) {
        let accountIndex = this.getAccountIndexByNumber(accNumber);
        if (accountIndex !== undefined) {
            const indexArraySize = this.accounts.length - 1;
            for (let i = accountIndex; i < indexArraySize; i++) {
                this.accounts[i] = this.accounts[i + 1];
            }
            this.accounts.pop();
            return true;
        }
        return false;
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
    associateClientAccount(accNumber, clientCPF) {
        const foundClient = this.consultClientByCPF(clientCPF);
        const foundAccount = this.consultAccount(accNumber);
        if (!foundClient.getAccounts().includes(foundAccount))
            foundClient.insertAccount(foundAccount);
        if (foundAccount.consultClient() != foundClient)
            foundAccount.associateClient(foundClient);
    }
    updateClient(cpf, name, dateBirth) {
        const client = this.consultClientByCPF(cpf);
        if (client != undefined) {
            if (name != undefined)
                client.setName(name);
            if (dateBirth != undefined)
                client.setDateBirth(dateBirth);
        }
    }
    bankWithdraw(value, accNumber) {
        const accountIndex = this.getAccountIndexByNumber(accNumber);
        if (accountIndex != undefined) {
            this.accounts[accountIndex].withdraw(value);
            return true;
        }
        return false;
    }
    bankDeposit(value, accNumber) {
        const accountIndex = this.getAccountIndexByNumber(accNumber);
        if (accountIndex != undefined) {
            this.accounts[accountIndex].deposit(value);
            return true;
        }
        return false;
    }
    transferBank(value, originAccNumber, destinyAccNumber) {
        if (value <= 0 || isNaN(value))
            return false;
        const originAccountIndex = this.getAccountIndexByNumber(originAccNumber);
        const destinyAccountIndex = this.getAccountIndexByNumber(destinyAccNumber);
        let originAccount;
        let destinyAccount;
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
    transferBankArray(value, originAccNumber, destinyAccounts) {
        const results = [];
        const originAccountIndex = this.getAccountIndexByNumber(originAccNumber);
        if (originAccountIndex === undefined) {
            return false;
        }
        const originAccount = this.accounts[originAccountIndex];
        for (const destinyAccNumber of destinyAccounts) {
            const destinyAccountIndex = this.getAccountIndexByNumber(destinyAccNumber);
            if (destinyAccountIndex !== undefined) {
                const destinyAccount = this.accounts[destinyAccountIndex];
                if (originAccount.withdraw(value)) {
                    destinyAccount.deposit(value);
                    results.push(true);
                }
                else {
                    results.push(false);
                    continue;
                }
            }
            else {
                results.push(false);
                continue;
            }
        }
        return results;
    }
    getAccountsAmount() {
        return this.accounts.length;
    }
    getAccountsBalanceAmount() {
        return this.accounts.reduce((total, account) => total + account.checkBalance(), 0);
    }
    balanceAccountsAvarage() {
        if (this.getAccountsAmount() <= 0)
            return 0;
        return this.getAccountsBalanceAmount() / this.getAccountsAmount();
    }
}
exports.Bank = Bank;
