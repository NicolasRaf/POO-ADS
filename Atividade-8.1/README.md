# __Atividade 8.1__

### 1ª Questão
Dentre as formas de tratamento de erros, as que encontrei como mais comum além do lanaçamento de exceções foi:

1. Verificação por código de retorno. 
```
public bankDeposit(value: number, accNumber: string): boolean {
    const accountIndex: number | undefined = this.getAccountIndexByNumber(accNumber);

    if (accountIndex != undefined) { 
        this._accounts[accountIndex].deposit(value);
        return true;
    }
    return false;
}
```

2. Tratamento por `try-catch`.
```
try:
    result = 10 / 0  # Isso causará uma divisão por zero
except ZeroDivisionError as e:
    print(f"Erro: {e}")
finally:
    print("Finalizando o bloco de código.")
```

3. Validação de entrada/Exibir mensagem de erro;
```
function processarIdade(idade: number) {
    if (idade < 0) {
        console.error("Idade inválida");
        return;
    }
    console.log("Idade válida:", idade);
}
```

---

### 2ª Questão 
1. A verfificação por código de retorno acaba ficando carente aos detalhes em relação ao erro, nescessitando sempre um verificar o retorno, que poder ser um problema, além de necessitar de documentações caso haja saída de codigos menos verbosos, além de não garantir uma padronização ao tratar os erros e pode junto a isto conflitar com o retorno desejado do código ou um calculado, causando dualiades.

2. O uso de try-catch é eficiente para capturar erros inesperados, mas pode apresentar algumas limitações importantes. Uma delas é o impacto no desempenho ,além blocos de try-catch mal projetados podem capturar erros de forma genérica, dificultando a identificação da causa real do problema ou mascarando falhas críticas. Outra limitação é a possibilidade de abuso, que pode resultar em um código desorganizado e menos legível.

3. No caso de mensagens de validação ou simplismente validar a entrada e retorna a função, acabamos atrealados a saída do terminal criando um processo muito manual para realizar a verificação em muitos pontos do código, além de dificultar a manutenção e o fluxo do código. 

---

### 3ª Questão - [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-8.1/src/apps/test_error.ts)
Método Atualizado:
```
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

---