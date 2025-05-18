import { createTaskCard, validateTask, displayCard } from './content.js'
import './sidebar.js'
import './heading.js'
import { taskManager } from '../logic/tasks.js';
import { allProjects, allTasks } from '../logic/main.js';
const taskModal = document.querySelector(".taskModal");

const addTaskBtn = document.getElementById("taskBtn");
addTaskBtn.addEventListener("click", () => {
    if (taskModal.style.display == "flex") {
        taskModal.style.display = "none";
    } else {
        taskModal.style.display = "flex";
    }
});

const randomTask = taskManager.createTask(
    "Hello", "Hello", "Hello", "Hello", "Hello"
)

const contentContainer = document.querySelector(".content");
const randomCard = createTaskCard(randomTask);
contentContainer.append(randomCard);

const submitTask = document.getElementById("submitTask");
submitTask.addEventListener("click", (event) => {
    event.preventDefault();
    const result = validateTask();
    if (result != `${taskForm['taskTitle'].value} already exists!`) {
        allTasks.forEach(task => {
            if (task.title == taskForm['taskTitle'].value) {
                displayCard(task);
            }
        })
    }
})

const editBtn = document.getElementById("editTask");
editBtn.addEventListener("click", () => {
    console.log("Hello")
})