const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");
const posts = document.querySelector("#posts");
const editIcon = document.querySelector("#edit");
const deleteIcon = document.querySelector("#delete");


form.addEventListener("submit", (e) =>{
  e.preventDefault()
  console.log("btn click");
  formValidation();
});

let formValidation = () => {
  
  if(input.value === ""){
    msg.innerHTML = "Post cannot be blank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data.text = input.value;
  console.log(data);
  createPost()
};

let createPost = () => {
  posts.innerHTML +=
  `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
      <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
    </span>
  </div> 
  `;
  input.value = "";
};


let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

