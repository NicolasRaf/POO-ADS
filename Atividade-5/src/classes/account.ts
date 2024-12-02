import { Client } from "./client";

export class Account {
    private id: number;
    private balance: number;
    private client: Client;

    constructor(id: number, balance: number, client: Client) {
        this.id = id;
        this.balance = balance;
        this.client = client;
    }

    public withdraw(value: number): void {
        this.balance = this.balance - value;
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

    public consultClient(): Client {
        return this.client;
    }

    public associateClient( client: Client ): void {
        this.client = client;
    }

    public transferir( destinyAccount: Account, value: number): void {
        // this.saldo = this.saldo - valor;
        // contaDestino.saldo = contaDestino.saldo + valor;

        this.deposit(value);
        destinyAccount.deposit(value);
    }
}

