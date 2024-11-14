"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
class Greeting {
    constructor(text, receiver) {
        this.text = text;
        this.recipient = receiver;
    }
    getGreeting() {
        return this.text + ", " + this.recipient;
    }
}
exports.Greeting = Greeting;
