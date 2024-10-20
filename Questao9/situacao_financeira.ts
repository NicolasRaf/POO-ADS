class FinancialSituation {
    valueCredits: number;
    amountDebits: number;
  
    calculateBalance(): number {
      return this.valueCredits - this.amountDebits;
    }
  }
  
function main(){
    let situation = new FinancialSituation();
    situation.valueCredits = 1000;
    situation.amountDebits = 500;

    console.log(`Credito: ${situation.valueCredits.toFixed(1)} R$`);
    console.log(`Debitos: ${situation.amountDebits.toFixed(1)} R$\n`);

    console.log(`Saldo: ${situation.calculateBalance().toFixed(1)} R$`);
}

main();