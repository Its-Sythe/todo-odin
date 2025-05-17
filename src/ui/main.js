import './content.js'
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

function validateTask() {
    const taskForm = document.forms['taskForm'];

    const taskTitle = taskForm['taskTitle'];
    const taskDesc = taskForm['taskDesc'];
    const taskDue = taskForm['taskDue'];
    const taskPriority = taskForm['taskPriority'];
    const taskProject = taskForm['taskProject'];

    for (let i = 0; i < taskForm.length; i++) {
        if (taskForm[i].value == "" && taskForm[i] != taskForm['submitTask']) {
            taskForm[i].style.border = "1px solid red";
            taskModal.style.display = "flex";
        } else if (taskForm[i].value != "" && taskForm[i] != taskForm['submitTask']) {
            const newTask = taskManager.createTask(
                taskTitle.value,
                taskDesc.value,
                taskDue.value,
                taskPriority.value,
                taskProject.value
            )
            if (allTasks.length != 0) {
                for (let j = 0; j < allTasks.length; j++) {
                    if (allTasks[j].title != newTask.title) {
                        allTasks.push(newTask);
                        break;
                    } else {
                        return `${newTask.title} already exists`;
                    }
                }
            } else {
                allTasks.push(newTask);
            }
            return taskModal.style.display = "none";
        }
    }
}

function displayTask() {
    const taskCard = document.getElementById("taskCard");
}

const submitTask = document.getElementById("submitTask");
submitTask.addEventListener("click", (event) => {
    event.preventDefault();
    validateTask();
    console.log(allTasks)
    displayTask();
})

displayTask()