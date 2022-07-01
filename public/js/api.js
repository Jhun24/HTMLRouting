let getBtn = document.getElementById("get-btn");
let postBtn = document.getElementById("post-btn");
let userId = document.getElementById("user-id");
let userPassword = document.getElementById("user-password");

const SERVER_URL = "http://localhost:3000"

let TestGet = ()=>{
    axios.get(SERVER_URL+"/test")
    .then((response)=>{
        console.log(response);
        alert(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

let TestPost = ()=>{
    let id = userId.value;
    let password = userPassword.value;
    axios.post(SERVER_URL+"/test",{"id":id, "password":password})
    .then((response)=>{
        console.log(response);
        alert(response.data);
    })
    .catch((error)=>{
        console.log(error);
    });
}

window.onload = ()=>{
    getBtn.addEventListener("click", TestGet);
    postBtn.addEventListener("click", TestPost);
}