"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(num, name, cpf, dateBirth, accounts) {
        this.id = num;
        this.name = name;
        this.CPF = cpf;
        this.dateBirth = dateBirth;
        this.accounts = accounts;
    }
    getCPF() {
        return this.CPF;
    }
    getId() {
        return this.id;
    }
    getAccounts() {
        return this.accounts;
    }
    insertAccount(newAccount) {
        this.accounts.push(newAccount);
    }
}
exports.Client = Client;
