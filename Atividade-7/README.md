# __Atividade 7__

### 4ª Questão | Letra b - [Código]()

```
public bankEarnInterest( accNumber: string ): boolean {
    const account: Account = this.consultAccount(accNumber);

    if ( account != undefined && account instanceof SavingsAccount) {
        (account as SavingsAccount).earnInterest();
        return true;
    }
    return false;   
}
```
