"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatedAccount = void 0;
class UpdatedAccount {
    constructor(num, balanceInitial) {
        this.num = num;
        this.balance = balanceInitial;
    }
    drawCash(value) {
        if (value > this.balance) {
            return false;
        }
        else {
            this.balance -= value;
            return true;
        }
    }
    deposit(value) {
        this.balance += value;
    }
    checkBalance() {
        return this.balance;
    }
    transfer(destinyAccount, value) {
        if (this.drawCash(value)) {
            destinyAccount.deposit(value);
            return true;
        }
        else {
            return false;
        }
    }
}
exports.UpdatedAccount = UpdatedAccount;
