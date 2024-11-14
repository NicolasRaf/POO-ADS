"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(num, balanceInitial) {
        this.num = num;
        this.balance = balanceInitial;
    }
    drawCash(value) {
        this.balance = this.balance - value;
    }
    deposit(value) {
        this.balance = this.balance + value;
    }
    checkBalance() {
        return this.balance;
    }
    transfer(destinyAccount, value) {
        this.drawCash(value);
        destinyAccount.deposit(value);
    }
}
exports.Account = Account;
