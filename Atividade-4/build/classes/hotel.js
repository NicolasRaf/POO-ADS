"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(numReserv) {
        this.qtdReservetions = numReserv;
    }
    addReservation() {
        this.qtdReservetions++;
    }
}
exports.Hotel = Hotel;
