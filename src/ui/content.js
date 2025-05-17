import { taskManager } from "../logic/tasks";
import { allTasks } from "../logic/main"

function getP() {
    return document.createElement("p");
}

const contentContainer = document.querySelector(".content");
const taskContainer = document.createElement("div");
taskContainer.id = "taskCard";

const taskTitle = getP();
const taskDesc = getP();
const taskDue = getP();
const taskPriority = getP();
const taskProject  = getP();

const buttonContainer = document.createElement("div");
buttonContainer.id = "taskBtns"

const deleteBtn = document.createElement("button");
deleteBtn.id = "deleteTask";
deleteBtn.textContent = "Delete"

const editBtn = document.createElement("button");
editBtn.id = "editTask";
editBtn.textContent = "Edit"

buttonContainer.append(editBtn, deleteBtn);

taskContainer.append(taskTitle, taskDesc, taskDue, taskPriority, taskProject, buttonContainer);

contentContainer.append(taskContainer);



export const contentSpace = contentContainer;