"use strict";
var Test = /** @class */ (function () {
    function Test(num, name) {
        this.num = num;
        this.str = name;
    }
    Test.prototype.showAttributes = function () {
        console.log("Atributos Teste: \n".concat(this.str, "\n").concat(this.num));
    };
    Test.prototype.uselessFunc = function () {
        return;
        console.log("Eu sou inacessível");
    };
    return Test;
}());
var Professor = /** @class */ (function () {
    function Professor(name, payment, language) {
        this.name = name;
        this.payment = payment;
        this.language = language;
    }
    return Professor;
}());
function main() {
    // target: "ES3" foi descontinua estou usando a "ES5";
    var test = new Test(10, "Um Texto");
    var professor = new Professor("Rogério", 200, "Python");
    //let randomText: string = null; --> "Type 'null' is not assignable to type 'string'" 
    //Erro gerado por tentar definir null há uma variável do tipo string "strictNullChecks": true.
    test.uselessFunc();
    // test.printNoTypeValue(2); --> Gera um erro por não ter um tipo explicito.
    test.showAttributes();
}
main();
//# sourceMappingURL=test.js.map