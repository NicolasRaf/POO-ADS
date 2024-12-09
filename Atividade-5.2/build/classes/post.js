"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    constructor(id, text, amountLikes = 0) {
        this.id = id;
        this.text = text;
        this.amountLikes = amountLikes;
    }
    likePost() {
        this.amountLikes++;
    }
    toString() {
        return `Postagem #${this.id}: ${this.text} - Curtidas: ${this.amountLikes}`;
    }
    getId() {
        return this.id;
    }
    getAmountLikes() {
        return this.amountLikes;
    }
}
exports.Post = Post;
