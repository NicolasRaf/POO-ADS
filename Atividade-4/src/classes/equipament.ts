export class Equipament {
    private on: boolean = false;

    public tunrOn(): void {
        if (this.on) { 
            console.log("O equipamento ja está ligado!");
            return;
        } 

        console.log("Ligando...");
        this.on = true;
     }

     public tunrOff(): void {
        if (!this.on) { 
            console.log("O equipamento ja está desligado!");
            return;
        } 

        console.log("Desligando...");
        this.on = false;
     }

     public invert(): void {
        console.log("Invertendo...");

        this.on = !this.on;
     }

     public isOn(): boolean {
        return this.on;
     }
}