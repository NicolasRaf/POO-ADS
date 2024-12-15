# ***Atividade 5.3***

### 1ª Questão 

O método `linkClientToAccount` da classe `Bank` realiza a associação entre um cliente e uma conta, garantindo que ambos estejam corretamente vinculados. Além disso, se uma conta já estiver associada a um cliente e for fornecido um cliente diferente nos parâmetros do método, o vínculo será atualizado para refletir a nova associação, substituindo o cliente anterior pela nova relação estabelecida.

```
public linkClientToAccount(  accNumber: string, clientCPF: string ): void {
  const foundClient: Client = this.consultClientByCPF(clientCPF);
  const foundAccount: Account = this.consultAccount(accNumber);

  if ( !foundClient.getAccounts().includes(foundAccount) ) foundClient.insertAccount(foundAccount);  
  if ( foundAccount.consultClient() != foundClient ) foundAccount.associateClient(foundClient);
}
```
#

### 2ª Questão 
Pergunto ao utilitário do banco se deseja manter as contas associadas aquele cliente, podendo assim excluir o cliente juntamente das suas contas ou manter elas sem nenhum cliente associado. Dependerá da regra de negócio aplicada pelo banco.

```
private handleDeleteClient(): void {
    const searchedCPF = getText("Informe o CPF do cliente: ");
    const keepAccounts = getChar("Deseja manter as contas do cliente? (S/N): ", ["S", "N"]).toUpperCase();
    const result = keepAccounts === "S" 
        ? this.bank.deleteClient(searchedCPF, false) 
        : this.bank.deleteClient(searchedCPF, true);
    this.checkResult(result, "Cliente excluído com sucesso!", "Falha ao excluir cliente!");
}

private checkResult(result: boolean, trueFeedback: any, falseFeedback: any): void {
    (result) ? console.log(trueFeedback) : console.log(falseFeedback);  
}
```

#

### 3ª Questão 
Ao excluir uma conta, perguntei se também erá desejado excluir o cliente associado aquela conta, porém tendo em vista que o cliente poderia ter alguma conta além daquela que foi escolhida para ser excluída, caso o usuário optar por excluir o cliente todas as outras contas associadas a ele também serão deletadas.

```
private handleDeleteAccount(): void {
      const accountNumber = getText("Digite o número da conta: ");
      const accIndex = this.bank.getAccountIndexByNumber(accountNumber);
      if (accIndex === undefined) {
          this.checkResult(false, "", "Conta não encontrada!");
          return;
      }

      const account = this.bank.getAllAccounts()[accIndex];
      const result = this.bank.deleteAccount(accountNumber);
      this.checkResult(result, "Conta excluída com sucesso!", "Falha ao excluir conta!");

      if (result) {
          const excludeClient = getChar(
              "Excluir cliente associado à conta? Isso também removerá todas as contas associadas! (S/N): ",
              ["S", "N"]
          ).toUpperCase();
          const client = account.consultClient();
          if (client && excludeClient === "S") {
              const clientResult = this.bank.deleteClient(client.getCPF(), true);
              this.checkResult(clientResult, "Cliente excluído com sucesso!", "Falha ao excluir cliente!");
          }
      }
  }
```

#

### 4ª Questão
Método criado listando e indexando as contas, possibilitando escolher qual conta para realizar a associação

```
private handleDisassociatedAccounts(): void {
      let indexSelected: number = -1;
      let accountSelected: string;

      while (indexSelected !== 0) {
          console.clear();
          let disassociatedAccounts = this.bank.listAccountsDisassociated();

          if (disassociatedAccounts.length === 0) {
              console.log("Não há contas sem cliente associado.");
              return;
          }

          console.log("Contas sem Clientes: ");
          disassociatedAccounts.forEach((account, index) => {
              console.log(`  ${index + 1}º --> ${account.getAccNumber()}`);
          });

          console.log();
          indexSelected = getNumberInRange("Escolha o número da conta pelo índice (ou 0 para cancelar): ", 0, disassociatedAccounts.length);
          if (indexSelected === 0) break;

          accountSelected = disassociatedAccounts[indexSelected - 1].getAccNumber();

          const searchedCPF = getText("Informe o CPF do cliente: ");
          const result = this.bank.linkClientToAccount(accountSelected, searchedCPF);
          this.checkResult(result, "Cliente e conta associados com sucesso!", "Falha ao associar conta e cliente!");

          pressEnter();
      }
  }
```

#

### 5ª Questão
Neste caso utilizei a função dentro do `Bank` para realizar as transferências entre as contas, porém antes de realizar a operação é antes verificados algumas ocasiões para evitar que realize uma transferência invalida.

```
private handleMultipleTransfers(): void {
      const originAccount: Account | undefined = this.bank.consultAccount(getText("Informe o número da conta de origem: "));

      if (originAccount === undefined) {
          console.log("Conta origem não encontrada!\n");
          return;
      }  

      const originBalance: number = originAccount.checkBalance();
      const valueToTransfer: number = getNumber("Valor a ser transferido às contas: ");
      const destinyAccounts: string[] = this.getAccountsNumArray(this.bank, originAccount.getAccNumber());

      if (destinyAccounts.length === 0) {
          console.log("Nenhuma conta adicionada!");
          return;
      }

      if (originBalance < valueToTransfer * destinyAccounts.length) {
          console.log("Saldo Insuficiente");
          return;
      }

      this.bank.transferBankArray(valueToTransfer, originAccount.getAccNumber(), destinyAccounts);
      console.log("Transferências realizadas com sucesso!");
  }
```

#

### 6ª Questão
Modificação na estrutura do [código](https://github.com/NicolasRaf/POO-ADS/blob/1e00d63334f49bb05b4d49ef884f21fa4f8a0e78/Atividade-5.3/src/app/app.ts) e [classe](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-5.3/src/classes/optionSelector.ts) responsável por realizar a função de menu e possuir seus métodos.

#