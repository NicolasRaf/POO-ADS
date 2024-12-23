import { Post } from "./post"

export class Microblog {
    private allPosts: Post[];

    constructor(){
        this.allPosts = [];
    }

    public insertPost( newPost: Post): void {
        this.allPosts.push(newPost);
    }

    public getPostIndexById( searchedPostId: number): number | undefined {
        for (let i = 0; i < this.allPosts.length; i++) {
            if (this.allPosts[i].getId() == searchedPostId) return i;
        }       
        return undefined;
    }


    public deletePost( searchedPostId: number): void {
        const postIndex = this.getPostIndexById(searchedPostId);

     
        if (postIndex !== undefined) { 
            const indexArraySize: number = this.allPosts.length - 1;
    
            for (let i = postIndex; i < indexArraySize; i++) {
                this.allPosts[i] = this.allPosts[i + 1];
            }
            this.allPosts.pop(); 
        }
    }

    public getPostMostLiked(): Post | undefined {
        let mostLikedPost: Post = this.allPosts[0];
        
        for (let post of this.allPosts) {
            if (post.getAmountLikes() > mostLikedPost.getAmountLikes()) {
                mostLikedPost = post;
        }
        
        return mostLikedPost
        }
    }

    public getPostById(searchedPostId: number): Post | undefined {
        const postIndex = this.getPostIndexById(searchedPostId);

        if (postIndex !== undefined) {
            return this.allPosts[postIndex];
        }
        return undefined;    
    }

    public likePostBlog(searchedPostId: number): void {
        const postIndex = this.getPostIndexById(searchedPostId);

        if (postIndex !== undefined) {  
            this.allPosts[postIndex].likePost();
        }
    }

    public allPostToString(): string {
        let allPostsString: string = '';

        for (let post of this.allPosts) {
            allPostsString += post.toString() + '\n';
        }
        return allPostsString;
    }
}