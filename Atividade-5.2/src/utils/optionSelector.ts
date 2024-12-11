import { Account, Bank, Client } from "../classes";
import { getNumber, getText } from "./io";

export function optionSelector(option: number, bank: Bank): void {
    console.clear();
    let client: Client | undefined;  
    let account: Account | undefined;
    let accountNumber: string; 
    let value: number;
    let result: boolean;
    let searchedCPF: string;

    switch (option) {
        case 1:
            const num: string = getText("Informe o número da conta: ");
            const initialBalance: number = getNumber("Informe o saldo inicial: ");
            bank.insertAccount(new Account(num, initialBalance));
            
            break;
        case 2:
            accountNumber = getText("Digite o número da conta: ");
            account = bank.consultAccount(accountNumber);

            checkResult( account != undefined, account, "Conta não encontrada!")
            break;
        case 3:
            accountNumber = getText("Digite o número da conta origem: "); 
            value = getNumber("Informe o valor a ser sacado: "); 
            result = bank.bankWithdraw(value, accountNumber);            
            
            checkResult( result, "Saque realizado com sucesso!", "Falha ao realizar saque!")
            break;
        case 4:
            accountNumber = getText("Digite o número da conta: ");
            value = getNumber("Infore o valor a ser depositado: ");
            result = bank.bankDeposit(value, accountNumber);

            checkResult( result, "Deposito realizado com sucesso!", "Falha ao realizar deposito!")
            break;
        case 5:
            accountNumber = getText("Digite o número da conta: ");
            result = bank.deleteAccount(accountNumber);
            
            checkResult( result, "Conta excluída com sucesso!", "Falha ao exluir conta!")
            break;
        case 6:
            let origimAccountNumber = getText("Informe o número da conta origem: ");
            let destinyAccountNumber = getText("Informe o número da conta destino: ");
            value = getNumber("Digite o valor a ser transferido: ");
            result = bank.transferBank(value, origimAccountNumber, destinyAccountNumber);

            checkResult(result, "Tranferência realizada com sucesso!", "Falha ao realizar a transferências entre as contas!");
            break;
        case 7:
            console.log("Opção 7 selecionada: Sair");
            

            break;
        case 8:
            const clientName = getText("Digite o nome do cliente: ");    
            const cpf = getText("Digite o CPF do cliente: ");    
            const dateBirth = getText("Informe a data de nascimento(YYYY-MM-DD): ");

            bank.insertClient(new Client(clientName, cpf, new Date(dateBirth)));
            break;
        case 9:
            searchedCPF = getText("Informe o CPF do cliente para consulta: ");
            client = bank.consultClientByCPF(searchedCPF);

            checkResult(client != undefined, client, "Falha ao consultar cliente")
            break;
        case 10:
            searchedCPF = getText("Informe o CPF do cliente: ");
            accountNumber = getText("Informe o número da conta: ");

            bank.associateClientAccount(accountNumber, searchedCPF);
            break;  
        default:
            console.log("Opção inválida! Por favor, selecione uma opção válida.");
    }

    console.log("\nOperação Finalizada!")
}


function checkResult(result: boolean, trueFeedback: any, falseFeedback: any): void {
    if (result) {
        console.log(trueFeedback);
    } else {
        console.log(falseFeedback);
    }
} 
    
