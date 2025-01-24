# __Atividade 8.1__

## 1ª Questão

Dentre as formas de tratamento de erros, as que encontrei como mais comum além do lançamento de exceções foi:

1 - Verificação por código de retorno.

``` Typescript
public bankDeposit(value: number, accNumber: string): boolean {
    const accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);

    if (accountIndex != undefined) { 
        this._accounts[accountIndex].deposit(value);
        return true;
    }
    return false;
}
```

2 - Tratamento por `try-catch`.

``` Typescript
try:
    result = 10 / 0  # Isso causará uma divisão por zero
except ZeroDivisionError as e:
    print(f"Erro: {e}")
finally:
    print("Finalizando o bloco de código.")
```

3 - Validação de entrada/Exibir mensagem de erro;

``` Typescript
function processarIdade(idade: number) {
    if (idade < 0) {
        console.error("Idade inválida");
        return;
    }
    console.log("Idade válida:", idade);
}
```

---

## 2ª Questão

1. A verificação por código de retorno acaba ficando carente aos detalhes em relação ao erro, necessitando sempre um verificar o retorno, que poder ser um problema, além de necessitar de documentações caso haja saída de códigos menos verbosos, além de não garantir uma padronização ao tratar os erros e pode junto a isto conflitar com o retorno desejado do código ou um calculado, causando dualidades.

2. O uso de try-catch é eficiente para capturar erros inesperados, mas pode apresentar algumas limitações importantes. Uma delas é o impacto no desempenho ,além blocos de try-catch mal projetados podem capturar erros de forma genérica, dificultando a identificação da causa real do problema ou mascarando falhas críticas. Outra limitação é a possibilidade de abuso, que pode resultar em um código desorganizado e menos legível.

3. No caso de mensagens de validação ou simplesmente validar a entrada e retorna a função, acabamos atrelados a saída do terminal criando um processo muito manual para realizar a verificação em muitos pontos do código, além de dificultar a manutenção e o fluxo do código.

---

## 3ª Questão - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-8.1/src/apps/test_error.ts)

Método Atualizado:

``` Typescript
public withdraw(value: number): void {
    if (value <= 0 || isNaN(value)) {
        throw new Error('Valor inválido para saque: ' + value);
    }
    
    if (this._balance < value) {
        throw new Error('Saldo insuficiente. Saldo atual: ' + this._balance);
    }

    this._balance -= value;
}
```

No código de teste de erro, ao tentar executar uma transferência com valor maior que a conta possui, é lançado um erro pelo código acima. Assim o bloco `try-catch` da implementação captura este erro e mostra ele ao usuário com o `error.mensagem` mostrando somente a mensagem de erro programada, caso a chamada da função `transferBank` estivesse fora do bloco `try-catch` a mensagem de erro seria executado no terminal completa, podendo no interromper o fluxo do código, ao mostrar a mensagem de erro ele executa o restante do código, mostrando que não houve mudanças no saldo.

---

## 4ª Questão - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-8.1/src/apps/app.ts)

Tentativa de transferência com valor maior que o saldo a partir da execução do `app`:

``` Terminal
Informe o número da conta origem: 111-1
Informe o número da conta destino: 222-2
Digite o valor a ser transferido: 100
Saldo insuficiente. Saldo atual: 40

Transferência falhou!
Operação Finalizada!

Press Enter para continuar...
```

Try-catch no método da classe [`OptionSelector`](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-8.1/src/models/bank/optionSelector.ts):

``` Typescript
    private handleTransfer(): void {
        const originAccount = getText("Informe o número da conta origem: ");
        const destinationAccount = getText("Informe o número da conta destino: ");
        const value = getNumber("Digite o valor a ser transferido: ");

        try {
            this._bank.transferBank(value, originAccount, destinationAccount);
            console.log("Transferência realizada com sucesso!");
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                console.log("Transferência falhou!");
            }
        }
    }
```

É notado a propagação do erro lançado na classe `Account` até a execução na classe que executa o `App`, onde a mensagem "Saldo insuficiente. Saldo atual: 40" foi a mensagem de error lançada pelo código `throw new Error('Valor inválido para saque: ' + value);`. Dessa forma, esse método de tratamento de erro é eficiente para evitar operações erradas, demonstrando ser uma implementação confiável tanto para avaliar o erro em código e para mostra-lo ao usuário

---

## 5ª Questão - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-8.1/src/models/bank/account.ts)

O código da classe `Account` foi atualizado implementando a função `validateValue` em suas operações:

``` Typescript
protected validateValue(value: number): void {
        if (value < 0 || isNaN(value)) {
            throw new Error(`Erro: Valor inválido\n`);
        };
    }
```

Porém, minha implementação possui também a função `getNumber` nas funções de [IO](https://github.com/NicolasRaf/POO-ADS/blob/5d73ded967c5c7a5ec0cc69a5a26eb539de8b8e0/Atividade-8.1/src/utils/io.ts):

``` Typescript
export function getNumber(text: string): number {
    const response = input(text);

    try {
        if (isNaN(Number(response)) || response === "") {
            throw new Error(`Erro: Caractere inválido!\n`);
        }
        return Number(response);
    } catch (error) {
        const typedError = error as Error;
        console.error(typedError.message); 
        return getNumber(text); 
    }
}
```

Dessa forma caso um caractere que não for numérico for enviando ele já lança o erro "Caractere Inválido" e pede novamente a entrada, caso o usuário envie um valor numero a função `getNumber` aceitará o numérico e repassará para a função `validateValue` na conta, onde dentro dela será lançado o erro de "Valor inválido" caso seja um valor menor que zero.
