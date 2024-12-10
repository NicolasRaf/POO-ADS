"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(id, name, cpf, dateBirth, accounts = []) {
        this.id = id;
        this.name = name;
        this.CPF = cpf;
        this.dateBirth = dateBirth;
        this.accounts = accounts;
    }
    getCPF() {
        return this.CPF;
    }
    getAccounts() {
        return this.accounts;
    }
    insertAccount(newAccount) {
        this.accounts.push(newAccount);
    }
    setName(newName) {
        this.name = newName;
    }
    setDateBirth(newDateBirth) {
        this.dateBirth = newDateBirth;
    }
}
exports.Client = Client;
