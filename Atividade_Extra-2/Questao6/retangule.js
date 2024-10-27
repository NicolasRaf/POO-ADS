var Retangule = /** @class */ (function () {
    function Retangule() {
    }
    Retangule.prototype.calculateArea = function () {
        return this.l1 * this.l2;
    };
    Retangule.prototype.calculatePerimeter = function () {
        return 2 * (this.l1 + this.l2);
    };
    Retangule.prototype.isSquare = function () {
        return this.l1 === this.l2;
    };
    return Retangule;
}());
function main() {
    console.clear();
    var MyRetangule = new Retangule();
    MyRetangule.l1 = 5;
    MyRetangule.l2 = 10;
    console.log("Lado 1: ".concat(MyRetangule.l1, " || Lado 2: ").concat(MyRetangule.l2, "\n"));
    console.log("\u00C1rea do Ret\u00E2ngulo: ".concat(MyRetangule.calculateArea()));
    console.log("Per\u00EDmetro do Ret\u00E2ngulo: ".concat(MyRetangule.calculatePerimeter()));
    if (MyRetangule.isSquare()) {
        console.log("É um quadrado!");
    }
    else {
        console.log("Não é um quadrado!");
    }
}
main();
