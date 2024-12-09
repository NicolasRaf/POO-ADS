# ***Atividade 5.2***

Resposta das questões de 1 a 5 no [código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-5/src/main.ts).

Saída do código com os valores originais:

```
Conta consultada pelo ID 1:
Account {
  id: 1,
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

Todas as contas no banco:
[
  Account {
    id: 1,
    balance: 1000,
    client: Client {
      id: 1,
      name: 'Ely Miranda',
      CPF: '123.456.789-00',
      dateBirth: 1990-01-01T00:00:00.000Z,
      accounts: [Array]
    }
  },
  Account {
    id: 2,
    balance: 500,
    client: Client {
      id: 2,
      name: 'Nicolas Rafael',
      CPF: '654.789.321-15',
      dateBirth: 2006-06-13T00:00:00.000Z,
      accounts: [Array]
    }
  }
]
```

### 6º Questão

- a) Isso acaba sendo um prática inadequada tendo em vista a distribuição de classes e responsabilidades no código. Dessa forma, seria melhor separar as responsabilidades de cadastro e regras de negócio.

- b) Sim, essa abordagem seria mais adequada. Criar classes específicas para gerenciar clientes e contas promove uma separação de responsabilidades e torna o sistema mais modular. Assim, a classe `Bank` serviria para o cadastro e vinculação das entidades do banco.

- c) Acredito que associado a classe `CadastroDeContas`, já que o método associar cliente precede ja haver um cliente para ser associado a uma conta, fazendo com que seja mais adequada adicionar esse método no funcionamento de cadastro de contas, assim ao fazer o cadastro da contas ja teríamos a associação do cliente proprietário dessa conta.
