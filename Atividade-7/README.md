# __Atividade 7__

### 1ª Questão - Saída do [Código](C:\Users\nicol\Documents\IFPI\ADS\POO-ADS\Atividade-7\src\apps\main_vehicle.ts)

```
Veículo:
 Placa: ABC1234
 Ano: 2020

Carro:
 Placa: XYZ5678
 Ano: 2022
 Modelo: Sedan

Carro Elétrico:
 Placa: ELEC123
 Ano: 2023
 Modelo: Model X
 Autonomia: 350 km
```

As classes disponibilizadas na questão foram refatoradas para uso de conceito de herança entre as classe e subclasses, de forma a criar subclasses `extends` em cadeia e aproveitando atributos em comum.

---

### 2ª e 3º Questão - Saída do [Código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-7/src/apps/main_calc.ts)

```
Calculadora Simples: Soma dos operandos 10 e 20:
30

Calculadora Científica: Elevando 5 ao expoente 3:
125
```

Para a acessar os atributos de operando da classe "pai" `Calculator` foi necessário transforma os seus atributos em `protected` em vez de `private`, também poderia ter transformados eles em `public`, mas preferir utilizar o protected por manter características do private para escopos que não são subclasses. Outro metódo que pensei seria usando um método `get` para os operandos, mas preferir simplificar com o modificador `protected`.

---

### 4ª Questão | Letra a - [Código](https://github.com/NicolasRaf/POO-ADS/blob/f861b781a3220f27030161e48f0e63ddab3b2a37/Atividade-7/src/models/bank/bank.ts)

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
