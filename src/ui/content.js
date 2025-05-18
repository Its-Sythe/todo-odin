import { taskManager } from "../logic/tasks";
import { allTasks } from "../logic/main"

function createTaskCard(task) {

    function getP() {
        return document.createElement("p");
    }

    const taskContainer = document.createElement("div");
    taskContainer.id = "taskCard";

    const taskTitle = getP();
    taskTitle.textContent = `Title: ${task.title}`;
    taskTitle.id = "cardTitle";
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

function validateTask() {
    const taskModal = document.querySelector(".taskModal");
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

function displayCard(task) {
    const contentContainer = document.querySelector(".content");
    const newCard = createTaskCard(task);
    contentContainer.append(newCard);
}

export { createTaskCard, validateTask, displayCard }