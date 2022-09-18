
var today = new Date();
document.getElementById("date-el").textContent  += today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("time-el").textContent += today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let clearPre = document.getElementById("save-el")


function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    // saveEl.style.border = "1px solid white";
}


function reset() {
    saveEl.textContent = "Previous entries: "
}
