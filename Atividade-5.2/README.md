# ***Atividade 5.2***

### 1ª Questão - Saída do [Codigo]()

```
Conta consultada pelo ID 1:
Account {
  id: 1,
  accNumber: 'A-111',
  balance: 1000,
  client: Client {
    id: 1,
    name: 'Ely Miranda',
    CPF: '123.456.789-00',
    dateBirth: 1990-01-01T00:00:00.000Z,
    accounts: []
  }
}

Cliente consultado pelo CPF '123.456.789-00':
Client {
  id: 1,
  name: 'Ely Miranda',
  CPF: '123.456.789-00',
  dateBirth: 1990-01-01T00:00:00.000Z,
  accounts: []
}

Associando conta ao cliente...

Contas do cliente Ely Miranda:
<ref *1> [
  Account {
    id: 1,
    accNumber: 'A-111',
    balance: 1000,
    client: Client {
      id: 1,
      name: 'Ely Miranda',
      CPF: '123.456.789-00',
      dateBirth: 1990-01-01T00:00:00.000Z,
      accounts: [Circular *1]
    }
  }
]

Contas do cliente Nicolas Rafael:
<ref *1> [
  Account {
    id: 2,
    accNumber: 'B-222',
    balance: 500,
    client: Client {
      id: 2,
      name: 'Nicolas Rafael',
      CPF: '654.789.321-15',
      dateBirth: 2006-06-13T00:00:00.000Z,
      accounts: [Circular *1]
    }
  }
]

Saldos antes da transferência:
Saldo da conta A-111: 1000
Saldo da conta B-222: 500

Realizando uma transferência de 200 da conta A-111 para a conta B-222...
Transferência realizada com sucesso: true

Saldos após a transferência:
Saldo da conta A-111: 800
Saldo da conta B-222: 700

Média de saldo das contas no banco:
750

Excluindo a conta B-222...
Contas após a exclusão:
[
  Account {
    id: 1,
    accNumber: 'A-111',
    balance: 800,
    client: Client {
      id: 1,
      name: 'Ely Miranda',
      CPF: '123.456.789-00',
      dateBirth: 1990-01-01T00:00:00.000Z,
      accounts: [Array]
    }
  }
]
Número de contas no banco:
1
Soma total dos saldos das contas:
800

Atualizando nome do cliente com CPF '123.456.789-00'...
<ref *1> Client {
  id: 1,
  name: 'Ely Santana',
  CPF: '123.456.789-00',
  dateBirth: 1990-01-01T00:00:00.000Z,
  accounts: [
    Account {
      id: 1,
      accNumber: 'A-111',
      balance: 800,
      client: [Circular *1]
    }
  ]
}

Realizando saque de 300 da conta A-111...
500

Realizando depósito de 150 na conta A-111...
650

Realizando transferência de 500 para várias contas...
Resultado das transferências: false,true

Saldos após a transferência:
Saldo da conta A-111: 1150
Saldo da conta C-333: 9999499

Estado da conta B-222 = null
PS C:\Users\labir\Documents\Enzo_Estudos\POO-ADS\Atividade-5.2\build>
Conta consultada pelo ID 1:
Account {
  id: 1,
  accNumber: 'A-111',
  balance: 1000,
  client: Client {
    id: 1,
    name: 'Ely Miranda',
    CPF: '123.456.789-00',
    dateBirth: 1990-01-01T00:00:00.000Z,
    accounts: []
  }
}

Cliente consultado pelo CPF '123.456.789-00':
Client {
  id: 1,
  name: 'Ely Miranda',
  CPF: '123.456.789-00',
  dateBirth: 1990-01-01T00:00:00.000Z,
  accounts: []
}

Associando conta ao cliente...

Contas do cliente Ely Miranda:
<ref *1> [
  Account {
    id: 1,
    accNumber: 'A-111',
    balance: 1000,
    client: Client {
      id: 1,
      name: 'Ely Miranda',
      CPF: '123.456.789-00',
      dateBirth: 1990-01-01T00:00:00.000Z,
      accounts: [Circular *1]
    }
  }
]

Contas do cliente Nicolas Rafael:
<ref *1> [
  Account {
    id: 2,
    accNumber: 'B-222',
    balance: 500,
    client: Client {
      id: 2,
      name: 'Nicolas Rafael',
      CPF: '654.789.321-15',
      dateBirth: 2006-06-13T00:00:00.000Z,
      accounts: [Circular *1]
    }
  }
]

Saldos antes da transferência:
Saldo da conta A-111: 1000
Saldo da conta B-222: 500

Realizando uma transferência de 200 da conta A-111 para a conta B-222...
Transferência realizada com sucesso: true

Saldos após a transferência:
Saldo da conta A-111: 800
Saldo da conta B-222: 700

Média de saldo das contas no banco:
750

Excluindo a conta B-222...
Contas após a exclusão:
[
  Account {
    id: 1,
    accNumber: 'A-111',
    balance: 800,
    client: Client {
      id: 1,
      name: 'Ely Miranda',
      CPF: '123.456.789-00',
      dateBirth: 1990-01-01T00:00:00.000Z,
      accounts: [Array]
    }
  }
]
Número de contas no banco:
1
Soma total dos saldos das contas:
800

Atualizando nome do cliente com CPF '123.456.789-00'...
<ref *1> Client {
  id: 1,
  name: 'Ely Santana',
  CPF: '123.456.789-00',
  dateBirth: 1990-01-01T00:00:00.000Z,
  accounts: [
    Account {
      id: 1,
      accNumber: 'A-111',
      balance: 800,
      client: [Circular *1]
    }
  ]
}

Realizando saque de 300 da conta A-111...
500

Realizando depósito de 150 na conta A-111...
650

Realizando transferência de 500 para várias contas...
Resultado das transferências: false,true

Saldos após a transferência:
Saldo da conta A-111: 1150
Saldo da conta C-333: 9999499

Estado da conta B-222 = null
```
### 2ª Questão - Saída do [Codigo]()
