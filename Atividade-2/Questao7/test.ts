class Test {
    private num: number;
    private str: string;

    constructor(num: number, name: string) {
        this.num = num;
        this.str = name;
    }

    public showAttributes(): void {
        console.log(`Atributos Teste: \n${this.str}\n${this.num}`);
    }

   public uselessFunc(): void{
        return
        console.log("Eu sou inacessível");
    }

    // public printNoTypeValue(value): void { --> Gera um erro por não ter um tipo explicito.
    //     console.log(value);
    // }
}

class Professor {
    name: string;
    payment: number;
    language: string;
  
    constructor(name: string, payment: number, language: string) {
      this.name = name;
      this.payment = payment;
      this.language = language;
    }
}

function main() {
    // target: "ES3" foi descontinua estou usando a "ES5";

    let test = new Test(10, "Um Texto");
    let professor = new Professor("Rogério", 200, "Python")

    //let randomText: string = null; --> "Type 'null' is not assignable to type 'string'" 
    //Erro gerado por tentar definir null há uma variável do tipo string "strictNullChecks": true.

    test.uselessFunc();
    // test.printNoTypeValue(2); --> Gera um erro por não ter um tipo explicito.

    
    test.showAttributes();
}

main();