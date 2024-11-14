export class UpdatedAccount{
    private num: string;
    private balance: number;

    constructor(num: string, balanceInitial: number) {
        this.num = num;
        this.balance = balanceInitial;
    }

    public drawCash(value: number): boolean {
        if (value > this.balance) {
            return false;
        } else {
            this.balance -= value;
            return true;
        }
    }

    public deposit(value: number): void {
        this.balance += value;
    }

    public checkBalance(): number {
        return this.balance;
    }

    public transfer(destinyAccount: UpdatedAccount, value: number): boolean {
        if (this.drawCash(value)) {
            destinyAccount.deposit(value);
            return true;
        } else {
            return false;
        }
    }
}