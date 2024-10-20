var Circule = /** @class */ (function () {
    function Circule() {
        this.PI = Math.PI;
    }
    Circule.prototype.calculateArea = function () {
        return this.PI * (Math.pow(this.radius, 2));
    };
    Circule.prototype.calculatePerimeter = function () {
        return 2 * this.PI * this.radius;
    };
    return Circule;
}());
function main() {
    var MyCircule = new Circule();
    MyCircule.radius = 10;
    console.log("Raio do Circulo: ".concat(MyCircule.radius));
    console.log("\u00C1rea do Circulo: ".concat(MyCircule.calculateArea().toFixed(2)));
    console.log("Perimetro do Circulo: ".concat(MyCircule.calculatePerimeter().toFixed(2)));
}
main();
