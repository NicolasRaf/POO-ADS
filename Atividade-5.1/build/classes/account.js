"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, balance, client) {
        this.id = id;
        this.balance = balance;
        this.client = client;
    }
    withdraw(value) {
        this.balance = this.balance - value;
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
    consultClient() {
        return this.client;
    }
    associateClient(client) {
        this.client = client;
    }
    transferir(destinyAccount, value) {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;
        this.deposit(value);
        destinyAccount.deposit(value);
    }
}
exports.Account = Account;
