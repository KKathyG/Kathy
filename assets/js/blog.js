function displayBlogs(){
    const blogs = JSON.parse(localStorage.getItem("blogs"))
    || []; //out of local storage, now we need to put them on the screen
    const blogsEl = document.querySelector("#blogs")
    blogsEl.innerHTML=""
for (let myCounter = 0; myCounter < blogs.length; myCounter++){
    const cardEl = document.createElement("div");
    const titleEl = document.createElement("h3");
    const contentEl = document.createElement("p");
    const userEl = document.createElement("p");
    const hrel = document.createElement("hr"); //this is the horizontal rule
    titleEl.textContent=blogs[myCounter].title
    contentEl.textContent=blogs[myCounter].content
    userEl.textContent=blogs[myCounter].username
    cardEl.classList.add("card") //this is how to attach CSS and do the classes dynamically in javascript
    //cardEl.classList.remove("card") if you want to remove a class
    cardEl.append(titleEl,hrel,contentEl,userEl)
    blogsEl.append(cardEl) //can put styling on the card
} //attach style in here as well
}

displayBlogs()

