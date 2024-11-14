export class Greeting {
    private text: string;
    private recipient: string;

    constructor(text: string, receiver: string) {
        this.text = text;
        this.recipient = receiver;
    }

    public getGreeting(): string {
        return  this.text + ", " + this.recipient;
    }
}