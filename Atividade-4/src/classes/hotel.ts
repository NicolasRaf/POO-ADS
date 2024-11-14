export class Hotel {
    public qtdReservetions: number;

    constructor(numReserv: number){
        this.qtdReservetions = numReserv;
    }

    public addReservation(): void {
        this.qtdReservetions++;
    }

}