const icons = document.querySelectorAll(".icon");
const ansContainer = document.querySelectorAll(".ans-conatiner");
 


icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    ansContainer[index].classList.toggle("show");
  });
})



// icons.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     const parent = icon.closest(".question-container");
//     const answer = parent.querySelector(".ans-conatiner");
    
//     answer.classList.toggle("show");
//   });
// });

