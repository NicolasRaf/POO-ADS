class Retangule {
    l1: number;
    l2: number;

    calculateArea(): number {
        return this.l1 * this.l2;
    }

    calculatePerimeter(): number {
        return 2 * (this.l1 + this.l2);
    }

    isSquare(): boolean {
        return this.l1 === this.l2;
    }
    
}

function main() {
    console.clear();

    let MyRetangule = new Retangule();
    MyRetangule.l1 = 5; 
    MyRetangule.l2 = 10; 

    console.log(`Lado 1: ${MyRetangule.l1} || Lado 2: ${MyRetangule.l2}\n`);

    console.log(`Área do Retângulo: ${MyRetangule.calculateArea()}`);
    console.log(`Perímetro do Retângulo: ${MyRetangule.calculatePerimeter()}`);

    if (MyRetangule.isSquare()){
        console.log("É um quadrado!");
    } else {
        console.log("Não é um quadrado!");
    }
}

main();
