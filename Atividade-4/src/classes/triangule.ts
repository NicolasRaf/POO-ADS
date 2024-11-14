export class Triangule{
    private sideA: number;
    private sideB: number;
    private sideC: number;

    constructor(sA: number, sB: number, sC: number){
        this.sideA = sA;
        this.sideB = sB;
        this.sideC = sC;
    }

    public isATriangule(): boolean {
        return (Math.abs(this.sideB - this.sideC) < this.sideA) && (this.sideA < this.sideB + this.sideC) 
    }

    public isEquilateral(): boolean {
        if (!this.isATriangule())  return false;

        return (this.sideA === this.sideB && this.sideB === this.sideC);
    }

    public isScalene(): boolean {
        if (!this.isATriangule())  return false;

        return (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideA !== this.sideC);
    }

    public isIsoceles(): boolean {
        if (!this.isATriangule() || this.isEquilateral() || this.isScalene()) return false;

        return true;
    }
    
}