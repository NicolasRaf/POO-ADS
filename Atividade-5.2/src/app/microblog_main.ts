import { Microblog, Post } from "../classes";

function main(): void {
    console.clear();
    
    const myMicroblog: Microblog = new Microblog();
    
    // Teste de Posts com IDs únicos
    const post1: Post = new Post(1, 'Primeira postagem!');
    const post2: Post = new Post(2, 'Segunda postagem!');
    const post3: Post = new Post(3, 'Terceira postagem!');

    myMicroblog.insertPost(post1);
    myMicroblog.insertPost(post2);
    myMicroblog.insertPost(post3);

    console.log("Todos os posts do Blog!");
    console.log(myMicroblog.allPostToString());

    // Testando curtidas
    console.log("Curtindo Posts");
    while (myMicroblog.getPostById(1)!.getAmountLikes() < 50) myMicroblog.likePostBlog(1);
    myMicroblog.likePostBlog(2);
    myMicroblog.likePostBlog(3);    

    console.log("Todos os posts do Blog!");
    console.log(myMicroblog.allPostToString());

    console.log("Post mais curtido: \n" + myMicroblog.getPostMostLiked()!.toString());

    // Deletando Post 1
    console.log("\nDeletando Post 1");
    myMicroblog.deletePost(1);

    console.log("Todos os posts do Blog!");
    console.log(myMicroblog.allPostToString());

    console.log("Post mais curtido: \n" + myMicroblog.getPostMostLiked()!.toString());

    // Testando método em post inexistente
    console.log("\nTestando métodos em post inexistente!");
    console.log(myMicroblog.getPostById(99)); 
    myMicroblog.likePostBlog(99); 
    myMicroblog.deletePost(99); 

    console.log("\nTodos os posts do Blog após inserção inválida:");
    console.log(myMicroblog.allPostToString());
}

main();
