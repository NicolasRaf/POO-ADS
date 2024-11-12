# ***Atividade 2***

### 1º Questão
A principal diferença entre os tipos de tipagem é a possibilidade de alterar o tipo da variável em diferentes momentos no código. Na tipagem dinâmica, é possível alterar o tipo da variável após sua declaração; ou seja, em diferentes momentos do código, uma variável poderá ter tipos diferentes. Já na tipagem estática, após definir o tipo da variável, não é possível alterá-lo nem realizar operações que mudem seu tipo implicitamente.
#

### 2º Questão
O principal problema do uso de tipagem dinâmica é que variáveis podem mudar de tipo durante a execução do código, o que pode causar comportamentos inesperados e erros em tempo de execução. Como o tipo das variáveis não é verificado em tempo de compilação, o programador tem menos controle sobre as mudanças de tipo, o que pode tornar a depuração mais difícil.
#

### 3º Questão
O código abaixo representa um problema da tipagem dinâmica, a função espera qualquer parâmetro para realizar uma soma, que seria uma operação entre tipo `number` causando uma saída inesperada, no caso a concatenação entre os valores e não a soma deles.


```
function somar(a: any, b: any): any {
  return a + b;
}

console.log(somar(5, "10"));  // Tentando somar um número com uma string
```

#

### 4º Questão
Nesse código em C, que possui tipagem estática, é possível ver uma venerabilidade em conversões implícitas durante o código, fazendo com que valores inesperados ocorram, visto que ao realizar uma operação de soma entre um `int` e um `float` o resultado sairá automaticamente truncado, desconsiderando as casas flutuantes


```
#include <stdio.h>

int main() {
    int a = 10;
    float b = 3.14;
    
    // C permite a conversão implícita entre tipos diferentes
    a = a + b;  // O float 'b' é implicitamente convertido para int, truncando a parte decimal
    
    printf("%d\n", a);  // Saída será 13 (o valor de 10 + 3.14 truncado para 13)
    return 0;
}
```

#


### 5º Questão
Sim, porque a forma como os números são armazenados pode variar dependendo da linguagem de programação. Em linguagens com tipagem dinâmica e fraca, como o TypeScript, ao definir uma variável como `number`, o sistema pode automaticamente converter entre inteiros e números flutuantes, sem exigir uma declaração explícita do tipo. 

#

### 6º Questão
*[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-2/Questao6)*

#

### 7º Questão
*[Questão em código](https://github.com/NicolasRaf/POO-ADS/blob/main/Atividade-2/Questao7)*

#