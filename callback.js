const post = [
    {
        title: "one",
        body: "First blog"
    },
    {
        title: "two",
        body: "Second Blog"
    }
];

function getPost(){ 
    setTimeout(()=>{
        let posts = '';
        post.forEach((item, index) => {
            posts += `<li> ${item.title}</li>`;
        })  
        document.body.innerHTML = posts; 
    },2000)
};

function createPost(title, body, callback){
    setTimeout(()=>{
        post.push({title,body});
        callback();
    }, 3000);
}

//getPost();
createPost("three", "Third Blog", getPost);