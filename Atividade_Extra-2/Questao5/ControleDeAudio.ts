class ControleDeAudio {
    volume: number = 2;

    aumentarVolume(): void {
        if (this.volume === 10) {
            console.log("O volume já está no maxímo!");
            return;
        }
        this.volume++;
        console.log("\nVolume Aumentado!");
        console.log(`Volume Atual: ${this.lerVolume()}`);
    }

    diminuirVolume(): void {
        if (this.volume === 0) {
            console.log("O volume já está no minímo!");
            return;
        }
        
        this.volume--;
        console.log("\nVolume Diminuido!");
        console.log(`Volume Atual: ${this.lerVolume()}`);
    }

    lerVolume(): number{
        return this.volume;
    }
}

function main() {
    console.clear()
    let myAudio = new ControleDeAudio();
    console.log(`Volume Inicial: ${myAudio.lerVolume()}`);

    myAudio.aumentarVolume();  
    myAudio.diminuirVolume();
}

main();