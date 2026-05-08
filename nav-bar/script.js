const menuContainer = document.querySelector(".menu-container");
const mainTags = document.querySelector(".main-tag");

menuContainer.addEventListener("click", ()=> {
   mainTags.classList.toggle("show");
})


mainTags.addEventListener("click", ()=> {
   mainTags.classList.remove("show");
})

