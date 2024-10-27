var FinancialSituation = /** @class */ (function () {
    function FinancialSituation() {
    }
    FinancialSituation.prototype.calculateBalance = function () {
        return this.valueCredits - this.amountDebits;
    };
    return FinancialSituation;
}());
function main() {
    var situation = new FinancialSituation();
    situation.valueCredits = 1000;
    situation.amountDebits = 500;
    console.log("Credito: ".concat(situation.valueCredits.toFixed(1), " R$"));
    console.log("Debitos: ".concat(situation.amountDebits.toFixed(1), " R$\n"));
    console.log("Saldo: ".concat(situation.calculateBalance().toFixed(1), " R$"));
}
main();
