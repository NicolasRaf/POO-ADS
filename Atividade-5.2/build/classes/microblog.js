"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Microblog = void 0;
class Microblog {
    constructor() {
        this.allPosts = [];
    }
    insertPost(newPost) {
        this.allPosts.push(newPost);
    }
    getPostIndexById(searchedPostId) {
        for (let i = 0; i < this.allPosts.length; i++) {
            if (this.allPosts[i].getId() == searchedPostId)
                return i;
        }
        return undefined;
    }
    deletePost(searchedPostId) {
        const postIndex = this.getPostIndexById(searchedPostId);
        if (postIndex !== undefined) {
            const indexArraySize = this.allPosts.length - 1;
            for (let i = postIndex; i < indexArraySize; i++) {
                this.allPosts[i] = this.allPosts[i + 1];
            }
            this.allPosts.pop();
        }
    }
    getPostMostLiked() {
        let mostLikedPost = this.allPosts[0];
        for (let post of this.allPosts) {
            if (post.getAmountLikes() > mostLikedPost.getAmountLikes()) {
                mostLikedPost = post;
            }
            return mostLikedPost;
        }
    }
    getPostById(searchedPostId) {
        const postIndex = this.getPostIndexById(searchedPostId);
        if (postIndex !== undefined) {
            return this.allPosts[postIndex];
        }
        return undefined;
    }
    likePostBlog(searchedPostId) {
        const postIndex = this.getPostIndexById(searchedPostId);
        if (postIndex !== undefined) {
            this.allPosts[postIndex].likePost();
        }
    }
    allPostToString() {
        let allPostsString = '';
        for (let post of this.allPosts) {
            allPostsString += post.toString() + '\n';
        }
        return allPostsString;
    }
}
exports.Microblog = Microblog;
