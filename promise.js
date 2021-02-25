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
        post.forEach((item, _index) => {
            posts += `<li> ${item.title}</li>`;
        })  
        document.body.innerHTML = posts; 
    },2000)
};

function createPost(title, body){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            post.push({title,body});
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("Something went wrong");
            }
        }, 3000);
    });
}

createPost("Three", "Third Blog")
.then(getPost)
.catch(err => console.log(err))
