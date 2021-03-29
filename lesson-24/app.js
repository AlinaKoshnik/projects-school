// const user = {
//     name:"Jack",
//     age:20,
//     skills:{
//         html:5
//     },
// }

// let copy = JSON.parse(JSON.stringify(user))
// copy.skills.html = 10;

// console.log(user)
// console.log(copy)

// fetch("https://api.github.com/users/alinakoshnik")
// .then((response) => response.json())
// .then(data => console.log(data))

// function ShowAvatar() {
//     fetch("https://api.github.com/users/kznkv-skillup")
//     .then((response) => response.json())
//     .then(data => {
//         let img = document.createElement("img");
//         let avatar = data.avatar_url;
//         img.setAttribute("src",avatar);
//         document.body.prepend(img)
//     })
// }

// let btn = document.querySelector("button")
// btn.addEventListener("click", ShowAvatar)

// class Article {
// constructor(title,src,description,name,parent) {
//     this.title = title;
//     this.src = src;
//     this.description = description;
//     this.name = name;
//     this.parent = document.querySelector(parent);
// } 

//     render(){
//         let article = document.createElement("article");
//         article.classList.add("col-6");
//         article.innerHTML = `
//         <div class="article">
//             <h2 class="article-title">${this.title}</h2>
//             <div class="article-img">
//                 <img src=${this.src} alt="">
//             </div>
//             <p class="article-description">${this.description}</p>
//             <div class="article-name">Author: ${this.name}</div>
//         </div>
//     `
//     this.parent.append(article)
        
//     }
// }


function UserInfo(name) {
    this.name = name;
    this.age = 30;

}

console.log(new UserInfo ("Ivan"));
console.log(new UserInfo ("Lena"));

