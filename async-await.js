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

async function init(){
    await createPost("three", "Third Blog");
    getPost();
}
init();

async function fetchUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const users = await res.json();

    console.log(users);
}

fetchUsers();