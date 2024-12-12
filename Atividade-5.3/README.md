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

### 2ª Questão - 

```
```

### 3ª Questão - [
