"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangule = void 0;
class Triangule {
    constructor(sA, sB, sC) {
        this.sideA = sA;
        this.sideB = sB;
        this.sideC = sC;
    }
    isATriangule() {
        return (Math.abs(this.sideB - this.sideC) < this.sideA) && (this.sideA < this.sideB + this.sideC);
    }
    isEquilateral() {
        if (!this.isATriangule())
            return false;
        return (this.sideA === this.sideB && this.sideB === this.sideC);
    }
    isScalene() {
        if (!this.isATriangule())
            return false;
        return (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideA !== this.sideC);
    }
    isIsoceles() {
        if (!this.isATriangule() || this.isEquilateral() || this.isScalene())
            return false;
        return true;
    }
}
exports.Triangule = Triangule;
