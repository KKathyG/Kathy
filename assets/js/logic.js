const themeButtonEl = document.querySelector('#icon');
let isDark = true;

function displayMode(mode) {
let icon;
if (mode==="light") {
    icon = "☀️"
} else {
    icon="🌙"
} 
// if need to do backgrounds can do that above with div tags
document.body.classList=mode
themeButtonEl.textContent=icon
}

function toggleMode() {
const mode=readMode();
let next;
if (mode==="light") {
    next = "dark" 
} else {
    next="light"
} displayMode(next);
localStorage.setItem("mode", next);
}

function readMode(){
const mode = localStorage.getItem("mode") || "light"; 
return mode
}

displayMode(readMode());

themeButtonEl.addEventListener("click", toggleMode);

//     background-color: #ffef97;