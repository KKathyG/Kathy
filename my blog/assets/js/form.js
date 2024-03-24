function handleSubmit(event) {
    event.preventDefault()
    const username = document.querySelector("#username").value.trim()
    const title = document.querySelector("#title").value.trim()
    const content = document.querySelector("#content").value.trim()
    if (!username || !title || !content) {
        const errorEl = document.querySelector("#error")
        errorEl.textContent = "Error placeholder text (please complete the form"
        setTimeout(() => {
            errorEl.textContent = ""
        }, 3000);
        return
    }
    const data = { username, title, content };
    handleLocalStorage(data)
    location.href = "blog.html"
}

function handleLocalStorage(data) {
    const blogs = JSON.parse(localStorage.getItem("blogs"))
        || []
    blogs.push(data)
    localStorage.setItem("blogs", JSON.stringify(blogs))
} //stringify put in, parse pull out

document.querySelector("form").addEventListener("submit", handleSubmit);