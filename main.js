let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.addEventListener("submit", (book)=>{
    book.preventDefault();
    console.log("button clicked")
    formValidation();
})

let formValidation = ()=>{
    if (input.value === "") {
        msg.innerHTML = "Post can not be blank!"
        console.log("failure")
    } 
    else {
        console.log("success")
        msg.innerHTML = ""
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <button onClick="editPost(this)" class="edit">Edit</button>
        <button onClick="deletePost(this)" class="delete">Delete</button>
    </span>
    </div>
    `
    data.text;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
} 

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}