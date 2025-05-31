// This will provide all features needed from the DOM
import { allTasks, createTask } from "./todo";
import { allProjects, createProject } from "./project";

function createTaskCard(task) {
    let content = document.querySelector(".content");
    let taskCard = document.createElement("div");
    taskCard.className = "task-card";

    let cardDetails = document.createElement("div");
    cardDetails.className = "card-details";
    let cardTitle = document.createElement('p');
    cardTitle.id = "card-title";
    cardTitle.textContent = task.title;
    let cardDue = document.createElement('p');
    cardDue.id = "card-due";
    cardDue.textContent = task.due;
    
    cardDetails.append(cardTitle, cardDue);

    let cardOptions = document.createElement("div");
    cardOptions.className = "card-options";
    let editBtn = document.createElement("button");
    editBtn.id = 'edit-task';
    editBtn.textContent = 'Edit';
    let deleteBtn = document.createElement("button");
    deleteBtn.id = 'delete-task';
    deleteBtn.textContent = 'Delete';

    cardOptions.append(editBtn, deleteBtn)

    taskCard.append(cardDetails, cardOptions)
    content.append(taskCard)
}

function createProjectBtn(name){
    const projectContainer = document.querySelector(".display-projects");
    const projectBtn = document.createElement("button");
    projectBtn.className = "project";
    projectBtn.textContent = name;

    projectContainer.append(projectBtn);
}

function displayTaskModal() {
    let taskModal = document.querySelector(".task-modal");
    if (taskModal.style.display == 'none' || taskModal.style.display == "") {
        return taskModal.style.display = 'flex';
    } else if (taskModal.style.display == 'flex') {
        return taskModal.style.display = 'none';
    }
    return taskBtnClicked = true;
}

function validateTaskForm() {
    let taskModal = document.querySelector(".task-modal")
    const taskForm = document.forms['task-form'];
    const taskName = taskForm['task-name'].value;
    const taskDue = taskForm['task-due'].value;
    const taskPriority = taskForm['task-priority'].value;
    const taskProject = taskForm['task-project'].value;

    if (taskName != "" && taskDue != "" && taskProject != "") {
        let newTask = createTask(
            taskName, taskDue, taskPriority, taskProject
        )
        taskModal.style.display = "none";
        return newTask;
    } else if (taskName == "" || taskDue == "") {
        alert("Fill the form please")
    }
}

function validateProject(projectName) {
    if (projectName != null) {
        let result = createProject(projectName);
        if (result.name === projectName) {
            createProjectBtn(projectName);
            return result;
        } else {
            return 'O_o';
        }
    } else {
        return `${projectName} is not legal`
    }
}

function displayProjectTasks(project) {
    if (project.tasks.length != 0) {
        for (let p = 0; p < project.tasks.length; p++) {
            let currentTaskCard = createTaskCard(project.tasks[p]);
            return currentTaskCard;
        }
    }
}

function handleActiveProject(event) {
    let tgt = event.target;
    let parentTgt = tgt.parentNode;
    let arrayOfChildNodes = Array.from(parentTgt.childNodes);
    let result = arrayOfChildNodes.some(child => child.id === 'active');
    if (tgt.className !== 'project') {
        return false;
    } 

    if (result === false) {
        return tgt.id = 'active';
    } else if (result === true) {
        let activeProject = arrayOfChildNodes.findIndex((child) => child.id == 'active');
        arrayOfChildNodes[activeProject].id = 'inactive';
        return tgt.id = 'active';
    }
}

const addTaskBtn = document.querySelector(".add-task");
addTaskBtn.addEventListener("click", displayTaskModal);


const submitTaskBtn = document.getElementById("submit-task");
submitTaskBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const task = validateTaskForm();
    createTaskCard(task);
});

const addProjectBtn = document.querySelector(".add-project");
addProjectBtn.addEventListener(
    "click", () => {
        const newProject = prompt("Enter project name: ");
        validateProject(newProject);
        return newProject
    }
)

const tasksContainer = document.querySelector(".display-tasks")


const projectsContainer = document.querySelector(".display-projects");
projectsContainer.addEventListener("click", handleActiveProject);