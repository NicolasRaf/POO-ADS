"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, accNumber, balance, client) {
        this.id = id;
        this.accNumber = accNumber;
        this.balance = balance;
        this.client = client;
    }
    withdraw(value) {
        if (value <= 0 || isNaN(value))
            return false;
        if (this.balance >= value) {
            this.balance -= value;
            return true;
        }
        return false;
    }
    deposit(value) {
        this.balance = this.balance + value;
    }
    checkBalance() {
        return this.balance;
    }
    getId() {
        return this.id;
    }
    getAccNumber() {
        return this.accNumber;
    }
    consultClient() {
        return this.client;
    }
    associateClient(client) {
        this.client = client;
    }
    transfer(destinyAccount, value) {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;
        this.deposit(value);
        destinyAccount.deposit(value);
    }
    setNewBalance(newBalance) {
        this.balance = newBalance;
    }
    setNewAccNumber(NewAccNumber) {
        this.accNumber = NewAccNumber;
    }
}
exports.Account = Account;
