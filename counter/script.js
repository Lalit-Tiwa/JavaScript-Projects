const container =document.querySelector(".container");
const count = document.querySelector(".count");


const decBtn = document.querySelector(".Dec-btn");
const resBtn = document.querySelector(".Res-btn");
const incBtn = document.querySelector(".Inc-btn");


let screenCount = 0;

incBtn.addEventListener("click" , ()=> {
    screenCount++;
    count.innerText = screenCount;
})

decBtn.addEventListener("click", ()=> {
    screenCount--;
    if (screenCount <= 0) {
        screenCount = 0  
    }
    count.innerText = screenCount;
    
})

resBtn.addEventListener("click", () => {
    screenCount = 0;
    count.innerText = screenCount;
})


