import { Post } from "./post"

export class Microblog {
    private allPosts: Post[];

    constructor(){
        this.allPosts = [];
    }

    public insertPost( newPost: Post): void {
        this.allPosts.push(newPost);
    }

    public getPostById( searchedPostId: number): Post | undefined {
        for (let post of this.allPosts) {
            if (post.getId() == searchedPostId){
                return post;
            }
        }
 
    }
}