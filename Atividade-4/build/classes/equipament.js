"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipament = void 0;
class Equipament {
    constructor() {
        this.on = false;
    }
    tunrOn() {
        if (this.on) {
            console.log("O equipamento ja está ligado!");
            return;
        }
        console.log("Ligando...");
        this.on = true;
    }
    tunrOff() {
        if (!this.on) {
            console.log("O equipamento ja está desligado!");
            return;
        }
        console.log("Desligando...");
        this.on = false;
    }
    invert() {
        console.log("Invertendo...");
        this.on = !this.on;
    }
    isOn() {
        return this.on;
    }
}
exports.Equipament = Equipament;
