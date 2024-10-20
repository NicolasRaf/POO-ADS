class Circule {
    radius: number;
    PI:number = Math.PI;

    calculateArea(): number{
        return this.PI * (this.radius**2);
    }

    calculatePerimeter(): number{
        return 2 * this.PI * this.radius;
    }
}

function main(){    
    let MyCircule = new Circule();
    MyCircule.radius = 10;

    console.log(`Raio do Circulo: ${MyCircule.radius}`)
    console.log(`Área do Circulo: ${MyCircule.calculateArea().toFixed(2)}`);
    console.log(`Perimetro do Circulo: ${MyCircule.calculatePerimeter().toFixed(2)}`);
}

main();