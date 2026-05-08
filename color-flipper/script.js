const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const colors = ["green", "red", "#E2E8F0","rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");

btn.addEventListener(("click"), ()=> {

    const getcolors = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[getcolors]
    color.innerText = colors[getcolors];

})

// function getRendomColor() {
//     return Math.floor(Math.random() * colors.length);
// }

