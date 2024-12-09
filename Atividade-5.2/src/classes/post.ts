
export class Post {
    private id: number;
    private text: string;
    private amountLikes: number;

    constructor(id: number, text: string, amountLikes: number = 0){
        this.id = id;
        this.text = text;
        this.amountLikes = amountLikes;
    }

    public likePost(): void {
        this.amountLikes++;
    }

    public toString(): string{
        return `Postagem #${this.id}: ${this.text} - Curtidas: ${this.amountLikes}`;
    }

    public getId(): number {
        return this.id;
    }

    public getAmountLikes(): number {
        return this.amountLikes;
    }



}