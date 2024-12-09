import { Client } from "./client";

export class Account {
    private id: number;
    private accNumber: string;
    private balance: number;
    private client: Client;

    constructor(id: number, accNumber: string, balance: number, client: Client) {
        this.id = id;        
        this.accNumber = accNumber;        
        this.balance = balance;
        this.client = client;
    }

    public withdraw(value: number): boolean {
        if (value <= 0 || isNaN(value)) return false;
        
        if (this.balance >= value) {
            this.balance -= value;
            return true;
        }
        return false;
    }

    public deposit(value: number): void {
        this.balance = this.balance + value;
    }

    public checkBalance(): number {
        return this.balance;
    }

    public getId(): number {
        return this.id;
    }

    public getAccNumber(): string {
        return this.accNumber;
    }

    public consultClient(): Client {
        return this.client;
    }

    public associateClient( client: Client ): void {
        this.client = client;
    }

    public transfer( destinyAccount: Account, value: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.deposit(value);
        destinyAccount.deposit(value);
    }  

    public setNewBalance(newBalance: number): void {
        this.balance = newBalance;
    }

    public setNewAccNumber(NewAccNumber: string): void {
        this.accNumber = NewAccNumber;
    }
}
