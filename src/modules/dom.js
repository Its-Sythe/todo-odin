import { allTasks, createTask } from "./todo";
import { allProjects, createProject } from "./project";

function displayTaskModal() {
    let taskModal = document.querySelector(".task-modal");
    if (taskModal.style.display == 'none' || taskModal.style.display == "") {
        return taskModal.style.display = 'flex';
    } else if (taskModal.style.display == 'flex') {
        return taskModal.style.display = 'none';
    }
}

function validateTaskForm() {
    let taskModal = document.querySelector(".task-modal")
    const taskForm = document.forms['task-form'];
    const taskName = taskForm['task-name'].value;
    const taskDue = taskForm['task-due'].value;
    const taskPriority = taskForm['task-priority'].value;

    if (taskName != "" && taskDue != "") {
        createTask(
            taskName, taskDue, taskPriority
        )
        taskModal.style.display = "none";
    } else if (taskName == "" || taskDue == "") {
        alert("Fill the form please")
    }
}

const addTaskBtn = document.querySelector(".add-task");
addTaskBtn.addEventListener("click", displayTaskModal);


const submitTaskBtn = document.getElementById("submit-task");
submitTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    validateTaskForm()
});