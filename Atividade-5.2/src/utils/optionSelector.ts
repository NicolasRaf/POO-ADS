import { Account, Bank, Client } from "../classes";
import { getNumber, getText } from "./io";

export function optionSelector(option: number, bank: Bank): void {
    console.clear();
    let client: Client | undefined;  
    let account: Account | undefined;
    let accountNumber: string; 

    switch (option) {
        case 1:
            const num: string = getText("Informe o número da conta: ");
            const initialBalance: number = getNumber("Informe o saldo inicial: ");
            bank.insertAccount(new Account(num, initialBalance));
            
            break;
        case 2:
            accountNumber = getText("Digite o número da conta: ");
            account = bank.consultAccount(accountNumber);

            if (account) {
                console.log(account);
            } else {
                console.log("Conta não encontrada!");
            }

            break;
        case 3:
            accountNumber = getText("Digite o número da conta origem: "); 
            let value = getNumber("Informe o valor a ser sacado: "); 
            let result = bank.bankWithdraw(value, accountNumber);            

            if (result) {

            }

            break;
        case 4:
            console.log("Opção 4 selecionada: Transferir");

            break;
        case 5:
            console.log("Opção 5 selecionada: Abrir nova conta");

            break;
        case 6:
            console.log("Opção 6 selecionada: Encerrar conta");

            break;
        case 7:
            console.log("Opção 7 selecionada: Sair");

            break;
        case 7:
            console.log("Opção 7 selecionada: Sair");
    
            break;   
        default:
            console.log("Opção inválida! Por favor, selecione uma opção válida.");
    }

    console.log("\nOperação Finalizada!")
}
