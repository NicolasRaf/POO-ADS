export class Player{
    private strength: number;
    private nivel: number;
    public points: number;

    constructor(initalStrengt: number, startNivel: number, initialPoints: number){
        this.strength = initalStrengt;
        this.nivel = startNivel;
        this.points = initialPoints;
    }

    public calculateAttack(): number {
        return this.strength * this.nivel;
    }

    public attack(enemyPlayer: Player): void {
        if (enemyPlayer.isAlive()) {
            const damage = this.calculateAttack();
            enemyPlayer.points -= damage;
        }
    }

    public isAlive(): boolean {
        return this.points > 0;
    }

    public toString(): string {
        return `Força: ${this.strength}, Nível: ${this.nivel}, Pontos: ${this.points}`;
    }
}
