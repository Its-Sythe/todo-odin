import './content.js'
import './sidebar.js'
import './heading.js'

const taskModal = document.querySelector(".taskModal");
console.log(taskModal)

const addTaskBtn = document.getElementById("taskBtn");
addTaskBtn.addEventListener("click", () => {
    if (taskModal.style.display == "flex") {
        taskModal.style.display = "none";
    } else {
        taskModal.style.display = "flex";
    }
})
