const btn = document.querySelector(".btn");
const contentContainer = document.querySelector(".content-container");
const closeBtn = document.querySelector(".close");
const mainContainer = document.querySelector(".model-container");

btn.addEventListener("click", () => {
    contentContainer.classList.add("show");
    mainContainer.style.backgroundColor = "#49a6e992";
    btn.classList.add("close");
})

closeBtn.addEventListener("click", () => {
    contentContainer.classList.remove("show");
    mainContainer.style.backgroundColor = "rgba(255, 255, 255, 0.653)";
    btn.classList.remove("close");

})
