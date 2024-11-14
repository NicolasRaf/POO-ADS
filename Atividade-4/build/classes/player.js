"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(initalStrengt, startNivel, initialPoints) {
        this.strength = initalStrengt;
        this.nivel = startNivel;
        this.points = initialPoints;
    }
    calculateAttack() {
        return this.strength * this.nivel;
    }
    attack(enemyPlayer) {
        if (enemyPlayer.isAlive()) {
            const damage = this.calculateAttack();
            enemyPlayer.points -= damage;
        }
    }
    isAlive() {
        return this.points > 0;
    }
    toString() {
        return `Força: ${this.strength}, Nível: ${this.nivel}, Pontos: ${this.points}`;
    }
}
exports.Player = Player;
