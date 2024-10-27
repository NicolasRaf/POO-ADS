# ***Atividade Extra***

### 1º Questão
Uma classe é um modelo que define os atributos e comportamentos de um determinado tipo de objeto. Ela serve como uma estrutura base para a criação de múltiplas instâncias, onde cada objeto gerado a partir dessa classe compartilha os mesmos métodos e características fundamentais. Em outras palavras, uma classe estabelece o "molde" que seus objetos seguirão. Já um objeto é uma instância específica dessa classe, ou seja, um exemplar concreto que possui os métodos e variáveis definidos pela classe da qual deriva.

* __Exemplo__: Imagine uma classe chamada Eletrônicos, que serve como um modelo para diferentes tipos de dispositivos eletrônicos. Por exemplo, um telefone e uma televisão são ambos objetos distintos, mas pertencem à mesma classe Eletrônicos. Isso significa que, embora tenham comportamentos e características próprias, eles compartilham atributos e métodos comuns definidos pela classe, como características relacionadas a consumo de energia ou conectividade.
#

### 2º Questão
* __Atributos__: são como as caracteristicas de um objeto, de forma a todos os objetos de uma classe compartilhar estes atributos.
* __Métodos__: os métodos definem o comportamento das instacias de objeto, são as ações que serão realizadas, as funções que esses objetos possuem.

__Exemplo__:
* **Classe**: Eletrônicos  
- Atributos:
  - Consumo
  - Marca
  - Preço
  - Potencia
- Métodos:
  - Ligar
  - Desligar
  - Configurar
#

### 3º Questão
| Atributo                        | Sistema em que não é importante | Sistema em que é moderadamente importante | Sistema em que é essencial |
| ------------------------------- | ------------------------------- | ----------------------------------------- | -------------------------- |
| CPF                             | Sistemas de Entreterimento      | Sistema Acadêmico                         | Sistema de Impostos        |
| Histórico de saúde              | Loja de Roupas                  | Nutricionista                             | Plano de Saúde             |
| Quantidade de seguidores        | Sistema de Saúde                | Sistema de Marketing                      | Rede Social                |
| Habilidade destra               | Restaurante                     | Competições de Jogos                      | Seleçãp de Atletas         |
| Endereço                        | Jogos Onlines                   | Serviços de Assinatura                    | Entregas e Delivery        |
| Saldo em Conta                  | Sistema de Pesquisa             | Marketplace                               | Sistema Bancario           |
| Etnia                           | Sites de Compras                | Pesquisa Demográfica                      | Senso Socio-Cultural       |
#

### 4º Questão
* a) Sim, seria interresante a conta possuir um atributo referente ao seu titular, desta forma seria formada uma ligação com a pessoa responsavel pela conta.
* b) Sim, tendo em vista que uma pessoa pode abrir mais contas em bancos diferentes, então possuir um atributo multivalorado em contas seria importante. E como forma de representar o conjuto da contas, um __array(lista)__ seria ideal para guardar e organizar todas as contas.
#

### 5º Questão
__Objetos de um sistema de controle acadêmico:__ Monitor, Diretor, Reitor, Periodos, Blocos, Aréas de Estudos...  
#

### 6º Questão
***Jogo de RPG:***

* Personagem
  - **Atributos:**
    - Nome
    - Classe (ex: guerreiro, mago, arqueiro)
    - Experiência
    - Habilidade
    - Vida
    - Inventário (lista de itens)
  - **Métodos:**
    - Atacar (alvo)
    - Mover (direção)
    - Ganhar experiência (quantidade)
    - Aprender habilidade (habilidade)
* Inimigo
  - **Atributos:**
    - Nome
    - Nível
    - Vida
    - Ataque
    - Defesa
  - **Métodos:**
    - Atacar (personagem)
    - Receber dano (quantidade)
    - Fugar-se (chance)

* Habilidade
  - **Atributos:**
    - Nome
    - Tipo (ex: ataque, defesa, suporte)
    - Custo de mana
    - Dano ou efeito
  - **Métodos:**
    - Usar (personagem, alvo)
    - Aumentar nível (número)
