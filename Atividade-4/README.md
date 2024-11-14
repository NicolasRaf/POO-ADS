# ***Atividade 4***

### 1º Questão
+ ( F ) Objetos são modelos para classes;
+ ( F ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as
classes compilem;
+ ( V ) Uma variável declarada dentro de um método deve ser inicializada para que a
classe seja compilável;
+ ( F ) Uma variável que seja uma classe declarada em um método é automaticamente
inicializada com undefined;
+ ( V ) Construtores são rotinas especiais que servem para inicializar e configurar os
objetos no momento da instanciação;
+ ( V ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros;
+ ( V ) Uma classe pode ter várias instâncias.
#

### 2º Questão
Sim, haverá um problema de compilação porque, ao tentar incrementar a variável ela estará com valor `undefined` por não ter sido inicializada ainda, fazendo com que seja impossivel realizar a operação de incremento, nesccessitando que as variaveis de instância precisem ser inicializadas antes de seu uso.
#

### 3º Questão
__[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts)__
#
    
### 4º Questão
O erro de compilação ocorre porque o construtor da classe `Radio` espera um valor do tipo `number` para inicializar a variável `volume`, o código apresentando instância um objeto da classe sem passar o parâmetro para o volume, causando o erro. A solução seria adicionar um valor no parêntese ao instânciar o objeto. [Codigo Solução](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts) 
#

### 5º Questão

- a) Ao final sera mostrado como resultado dos "prints" o saldo de 90, todos referentes a conta 2. Isso ocorre porque todas as contas foram apontadas para a `c2`, ou seja, tanto `c1` quanto `c3` estão referenciando o mesmo objeto de `c2`, logo todas terão o mesmo saldo, assim, gerando a mesma saída.

- b) O obejto de `c1` foi perdido após a variável não referencia-lo mais, assim, ele se tornou `garbage collection`, sendo removido automaticamente da memória.

#

### 6º Questão
__[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts)__

#

### 7º Questão
__[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts)__

#

### 8º Questão
__[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts)__

#   

### 9º Questão
__[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts)__

#

### 10º Questão
__[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-4/src/main.ts)__

#

### 11º Questão
Visando maior **precisão** e **controle dos erros**  durante o código, acho melhor a abordagem da questão 9, de forma que sempre teremos um resultado, mesmo que em caso falso, o que, da maior **visibilidade** do funcinamento do código, porém a abordagem da 10ª questão é **dinâmica**, fazendo com que o fluxo do código seja **mais linear**, desconsidrando erros e casos irrelevates durante a execução, sem um feedback nescessário.

#