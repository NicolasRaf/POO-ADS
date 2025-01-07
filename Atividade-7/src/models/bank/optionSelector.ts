import { Account, Bank, Client } from "../index";
import { getChar, getNumber, getNumberInRange, getText, pressEnter } from "../../utils/io";

export class OptionSelector {
    private _bank: Bank;

    constructor() {
        this._bank = new Bank();
    }

    public showMenu(): number {
        console.clear();
    
        console.log(`  ==============================================`); 
        console.log(`\tBem vindo! Selecione uma opção:`);
        console.log(`  ==============================================`);
    
        console.log(`\t  Contas   \t\tClientes\n     -------------------   -------------------
    \t01-Inserir             11-Inserir
    \t02-Consultar           12-Consultar
    \t03-Sacar               13-Associar 
    \t04-Depositar            e trocar
    \t05-Excluir             14-Excluir
    \t06-Transferir 
    \t07-Totalizações   
    \t08-Contas sem
           cliente   
    \t09-Transferências
           multiplas  
    \t10-Render Juros                0-Sair
    ==============================================\n`);
    
        return getNumberInRange(" >> ", 0, 14);
    }

    public handleOption(option: number): void {

        console.clear();
        switch (option) {
            case 1:
                this.handleInsertAccount();
                break;
            case 2:
                this.handleConsultAccount();
                break;
            case 3:
                this.handleWithdraw();
                break;
            case 4:
                this.handleDeposit();
                break;
            case 5:
                this.handleDeleteAccount();
                break;
            case 6:
                this.handleTransfer();
                break;
            case 7:
                this.handleBalanceSummary();
                break;
            case 8:
                this.handleDisassociatedAccounts();
                break;
            case 9:
                this.handleMultipleTransfers();
                break;
            case 10:
                break;
            case 11:
                this.handleInsertClient();
                break;
            case 12:
                this.handleConsultClient();
                break;
            case 13:
                this.handleLinkClientToAccount();
                break;
            case 14:
                this.handleDeleteClient();
                break;
            default:
                console.log("Opção inválida! Por favor, selecione uma opção válida.");
        }
        console.log("Operação Finalizada!");
    }

    private handleInsertAccount(): void {
        const num: string = getText("Informe o número da conta: ");
        const initialBalance: number = getNumber("Informe o saldo inicial: ");
        this._bank.insertAccount(new Account(num, initialBalance));
        console.log("\nConta inserida com sucesso!");
    }

    private handleConsultAccount(): void {
        const accountNumber = getText("Digite o número da conta: ");
        const account = this._bank.consultAccount(accountNumber);
        this.checkResult(account != undefined, account, "Conta não encontrada!");
    }

    private handleWithdraw(): void {
        const accountNumber = getText("Digite o número da conta origem: ");
        const value = getNumber("Informe o valor a ser sacado: ");
        const result = this._bank.bankWithdraw(value, accountNumber);
        this.checkResult(result, "Saque realizado com sucesso!", "Falha ao realizar saque!");
    }

    private handleDeposit(): void {
        const accountNumber = getText("Digite o número da conta: ");
        const value = getNumber("Informe o valor a ser depositado: ");
        const result = this._bank.bankDeposit(value, accountNumber);
        this.checkResult(result, "Depósito realizado com sucesso!", "Falha ao realizar depósito!");
    }

    private handleDeleteAccount(): void {
        const accountNumber = getText("Digite o número da conta: ");
        const account = this._bank.consultAccount(accountNumber);

            
        const result = this._bank.deleteAccount(accountNumber);
        this.checkResult(result, "Conta excluída com sucesso!", "Falha ao excluir conta!");

        if (result) {
            const excludeClient = getChar(
                "Excluir cliente associado à conta? Isso também removerá todas as contas associadas! (S/N): ",
                ["S", "N"]
            ).toUpperCase();
            const client = account.client;
            if (client && excludeClient === "S") {
                const clientResult = this._bank.deleteClient(client.cpf, true);
                this.checkResult(clientResult, "Cliente excluído com sucesso!", "Falha ao excluir cliente!");
            }
        }
    }

    private handleTransfer(): void {
        const originAccount = getText("Informe o número da conta origem: ");
        const destinationAccount = getText("Informe o número da conta destino: ");
        const value = getNumber("Digite o valor a ser transferido: ");
        const result = this._bank.transferBank(value, originAccount, destinationAccount);
        this.checkResult(result, "Transferência realizada com sucesso!", "Falha ao realizar transferência!");
    }

    private handleBalanceSummary(): void {
        console.log(`Total de Saldo das contas no banco: ${this._bank.getAccountsBalanceAmount()}`);
        console.log(`Média de Saldo das contas no banco: ${this._bank.balanceAccountsAvarage()}`);
    }

    private handleDisassociatedAccounts(): void {
        let indexSelected: number = -1;
        let accountSelected: string;

        while (indexSelected !== 0) {
            console.clear();
            let disassociatedAccounts = this._bank.listAccountsDisassociated();

            if (disassociatedAccounts.length === 0) {
                console.log("Não há contas sem cliente associado.");
                return;
            }

            console.log("Contas sem Clientes: ");
            disassociatedAccounts.forEach((account, index) => {
                console.log(`  ${index + 1}º --> ${account.accNumber}`);
            });

            console.log();
            indexSelected = getNumberInRange("Escolha o número da conta pelo índice (ou 0 para cancelar): ", 0, disassociatedAccounts.length);
            if (indexSelected === 0) break;

            accountSelected = disassociatedAccounts[indexSelected - 1].accNumber;

            const searchedCPF = getText("Informe o CPF do cliente: ");
            const result = this._bank.linkClientToAccount(accountSelected, searchedCPF);
            this.checkResult(result, "Cliente e conta associados com sucesso!", "Falha ao associar conta e cliente!");

            pressEnter();
        }
    }

    private handleMultipleTransfers(): void {
        const originAccount: Account | undefined = this._bank.consultAccount(getText("Informe o número da conta de origem: "));

        if (originAccount === undefined) {
            console.log("Conta origem não encontrada!\n");
            return;
        }  

        const originBalance: number = originAccount.balance;
        const valueToTransfer: number = getNumber("Valor a ser transferido às contas: ");
        const destinyAccounts: string[] = this.getAccountsNumArray(this._bank, originAccount.accNumber);

        if (destinyAccounts.length === 0) {
            console.log("Nenhuma conta adicionada!");
            return;
        }

        if (originBalance < valueToTransfer * destinyAccounts.length) {
            console.log("Saldo Insuficiente");
            return;
        }

        this._bank.transferBankArray(valueToTransfer, originAccount.accNumber, destinyAccounts);
        console.log("Transferências realizadas com sucesso!");
    }

    private handleInsertClient(): void {
        const clientName = getText("Digite o nome do cliente: ");
        const cpf = getText("Digite o CPF do cliente: ");
        const dateBirth = getText("Informe a data de nascimento (YYYY-MM-DD): ");
        this._bank.insertClient(new Client(clientName, cpf, new Date(dateBirth)));
        console.log("Cliente inserido com sucesso!");
    }

    private handleConsultClient(): void {
        const searchedCPF = getText("Informe o CPF do cliente para consulta: ");
        const client = this._bank.consultClientByCPF(searchedCPF);
        this.checkResult(client != undefined, client, "Falha ao consultar cliente!");
    }

    private handleLinkClientToAccount(): void {
        const searchedCPF = getText("Informe o CPF do cliente: ");
        const accountNumber = getText("Informe o número da conta: ");
        const result = this._bank.linkClientToAccount(accountNumber, searchedCPF);
        this.checkResult(result, "Cliente e conta associados com sucesso!", "Falha ao associar conta e cliente!");
    }

    private handleDeleteClient(): void {
        const searchedCPF = getText("Informe o CPF do cliente: ");
        const keepAccounts = getChar("Deseja manter as contas do cliente? (S/N): ", ["S", "N"]).toUpperCase();
        const result = keepAccounts === "S" 
            ? this._bank.deleteClient(searchedCPF, false) 
            : this._bank.deleteClient(searchedCPF, true);
        this.checkResult(result, "Cliente excluído com sucesso!", "Falha ao excluir cliente!");
    }

    private checkResult(result: boolean, trueFeedback: any, falseFeedback: any): void {
        (result) ? console.log(trueFeedback) : console.log(falseFeedback);  
    }

    private getAccountsNumArray(bank: Bank, originAccNum: string): string[] {
        let count: number = 1;
        const accounts: string[] = [];
        
        while (true) { 
            console.clear();
            let accNumber = getText(`Informe o número da ${count}ª conta (0 para cancelar): `);
            if (accNumber === "0") return accounts;

            if (accNumber === "") {
                console.log("Número da conta não pode estar vazio!");
                pressEnter();
                continue;
            }

            if (accNumber === originAccNum) {
                console.log("Insira uma conta diferente da conta origem!");
                pressEnter();
                continue;
            }

            if (accounts.includes(accNumber)) {
                console.log("Esta conta já foi adicionada!");
                pressEnter();
                continue;
            }

            const account: Account | undefined = this._bank.consultAccount(accNumber);
            if (account === undefined) {
                console.log("Conta não encontrada!");
                pressEnter();
                continue;
            }

            accounts.push(account.accNumber);
            console.log(`Conta ${accNumber} adicionada com sucesso!`);
            count++
            pressEnter();
        }
    }
}
