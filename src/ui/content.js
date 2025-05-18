import { taskManager } from "../logic/tasks";
import { allTasks } from "../logic/main"

function createTaskCard(task) {

    function getP() {
        return document.createElement("p");
    }

    const taskContainer = document.createElement("div");
    taskContainer.id = "taskCard";

    const taskTitle = getP();
    taskTitle.textContent = `Title: ${task.title}`
    const taskDesc = getP();
    taskDesc.textContent = `Description: ${task.desc}`
    const taskDue = getP();
    taskDue.textContent = `Task Due: ${task.due}`;
    const taskPriority = getP();
    taskPriority.textContent = `Priority: ${task.priority}`;
    const taskProject  = getP();
    taskProject.textContent = `Project: ${task.project}`;
    
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

    return taskContainer;
}

export { createTaskCard }