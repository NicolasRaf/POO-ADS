export class Account {
    private num: String;
    private balance: number;

    constructor(num: string, balanceInitial: number) {
        this.num = num;
        this.balance = balanceInitial;
    }

    public drawCash(value: number): void {
        this.balance = this.balance - value;
    }

    public deposit(value: number): void {
        this.balance = this.balance + value;
    }

    public checkBalance(): number {
        return this.balance;
    }

    public transfer(destinyAccount: Account, value: number): void {
        this.drawCash(value);
        destinyAccount.deposit(value);
    }
}