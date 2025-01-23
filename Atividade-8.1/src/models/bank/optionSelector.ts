import { Account, Bank, BonusAccount, Client, SavingsAccount, TaxAccount } from "../index";
import { getChar, getNumber, getNumberInRange, getText, getTextFiltred, pressEnter } from "../../utils/io";

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
    \t06-Transferir      ===================     
    \t07-Totalizações         Arquivos
    \t08-Contas sem        --------------   
           cliente            15-Carregar 
    \t09-Transferências        Arquivo     
           multiplas          16-Salvar 
    \t10-Render Juros         Arquivo    
                                    
    0-Sair
    ==============================================\n`);
    
        return getNumberInRange(" >> ", 0, 16);
    }

    public handleOption(option: number): void {
        console.clear();

        const optionsMap: { [key: number]: () => void } = {
            1: this.handleInsertAccount.bind(this),
            2: this.handleConsultAccount.bind(this),
            3: this.handleWithdraw.bind(this),
            4: this.handleDeposit.bind(this),
            5: this.handleDeleteAccount.bind(this),
            6: this.handleTransfer.bind(this),
            7: this.handleBalanceSummary.bind(this),
            8: this.handleDisassociatedAccounts.bind(this),
            9: this.handleMultipleTransfers.bind(this),
            10: this.handleEarnInterest.bind(this),
            11: this.handleInsertClient.bind(this),
            12: this.handleConsultClient.bind(this),
            13: this.handleLinkClientToAccount.bind(this),
            14: this.handleDeleteClient.bind(this),
            15: this.handleAddFromFile.bind(this),
            16: this._bank.saveAccountsInFile.bind(this._bank),
        };

        if (!optionsMap[option]) {
            console.log("Opção inválida! Por favor, selecione uma opção válida.");
            return;
        } 
        optionsMap[option](); 
        console.log("Operação Finalizada!");
    }
    
    private handleInsertAccount(): void {
        const typeAcc: string = getChar(`Conta Corrente, Conta Poupança, Conta Tributária ou Conta Bônus(C/P/T/B): `, ["c", "p", "t", "b"]);
        const num: string = getText("Informe o número da conta: ");
        const initialBalance: number = getNumber("Informe o saldo inicial: ");
        let result: boolean = false;
    
        if (typeAcc.toUpperCase() === "C") {
            result = this._bank.insertAccount(new Account(num, initialBalance));
        } else if (typeAcc.toUpperCase() === "P") {
            const interestRate: number = getNumber("Informe a taxa de juros: ");
            result = this._bank.insertAccount(new SavingsAccount(num, initialBalance, interestRate));
        } else if (typeAcc.toUpperCase() === "T") {
            const taxAccount = new TaxAccount(num, initialBalance);  
            result = this._bank.insertAccount(taxAccount);
            console.log(`Taxa de Imposto: ${(taxAccount.taxRate*100)}%`);
        } else if (typeAcc.toUpperCase() === "B") {
            const bonusAccount = new BonusAccount(num, initialBalance);  
            result = this._bank.insertAccount(bonusAccount);
            console.log(`Bônus da Conta: ${(bonusAccount.bonusRate*100)}%`);
        }
        
        this.checkResult(result, "\nConta inserida com sucesso!", "\nFalha ao inserir conta!");
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
        const clientName = getTextFiltred("Digite o nome do cliente: ", "na");
        const cpf = getText("Digite o CPF do cliente: ");
        const dateBirth = getText("Informe a data de nascimento (YYYY-MM-DD): ");
        const result = this._bank.insertClient(new Client(clientName, cpf, new Date(dateBirth)));
        this.checkResult(result, "Cliente inserido com sucesso!", "Falha ao inserir cliente!");
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

    private handleEarnInterest(): void {
        const accNumber: string = getText("Informe o número da conta: ");
        const result: boolean = this._bank.bankEarnInterest(accNumber);

        this.checkResult(result, "Sucesso ao render juros!", "Não foi possivel render juros da conta!")
    }

    private handleAddFromFile(): void {
        const addedAccounts = this._bank.addFromFile();

        console.log(`Contas Adicionadas: `);
        for ( let i = 0; i < addedAccounts.length; i++) {
            console.log(` ${i+1}ª -> ${addedAccounts[i]}`);
        }
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
