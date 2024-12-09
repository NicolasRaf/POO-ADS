import { Microblog, Post } from "../classes";

function main(): void {
    console.clear();
    
    const myMicroblog = new Microblog();
    myMicroblog.insertPost(new Post(1, 'Primeira postagem!'));
    myMicroblog.insertPost(new Post(2, 'Segunda postagem!', 10));
    myMicroblog.insertPost(new Post(3, 'Terceira postagem!', 25));

    console.log("Todos os posts do Blog!");
    console.log(myMicroblog.allPostToString());

    console.log("Curtindo Posts");
       
    while (myMicroblog.getPostById(1)!.getAmountLikes() < 50) myMicroblog.likePostBlog(1);  
    myMicroblog.likePostBlog(2);
    myMicroblog.likePostBlog(3);    

    console.log("Todos os posts do Blog!");
    console.log(myMicroblog.allPostToString());

    console.log("Post mais curtido: \n" + myMicroblog.getPostMostLiked()!.toString());

    console.log("\nDeletando Post 1");
    myMicroblog.deletePost(1);

    console.log("Todos os posts do Blog!");
    console.log(myMicroblog.allPostToString());

    console.log("Post mais curtido: \n" + myMicroblog.getPostMostLiked()!.toString());

    // Fazer copia dos posts
    const myMicroblogCopy = new Microblog();
    myMicroblogCopy.insertPost(new Post(1, 'Primeira postagem!'));
    myMicroblogCopy.insertPost(new Post(2, 'Segunda postagem!', 10));
    myMicroblogCopy.insertPost(new Post(3, 'Terceira postagem!', 25));

    console.log("Todos os posts do Blog!");
    console.log(myMicroblogCopy.allPostToString());
}

main();