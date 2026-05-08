const historyTab = document.getElementById("history-tab");
const visionTab = document.getElementById("vision-tab");
const goalsTab = document.getElementById("goals-tab");

const history = document.getElementById("history");
const vision = document.getElementById("vision");
const goals = document.getElementById("goals");


function showSection(sectionToShow) {
    history.style.display = "none";
    vision.style.display = "none";
    goals.style.display = "none";

    sectionToShow.style.display = "block";
}

visionTab.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(vision);
});

goalsTab.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(goals);
});

historyTab.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(history);
});


// visionTab.addEventListener("click", (e) => {
//     e.preventDefault();
//     vision.style.display = "block";
//     history.style.display = "none";
//     goals.style.display= "none";
// })


// goalsTab.addEventListener("click", (e) => {
//     e.preventDefault();
//     goals.style.display= "block";
//     history.style.display = "none";
//     vision.style.display = "none";

// });

// historyTab.addEventListener("click", (e)=> {
//     e.preventDefault();
//     history.style.display = "block";
//     vision.style.display = "none";
//     goals.style.display = "none";
// })


