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
    projectBtn.id = name;
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
projectsContainer.addEventListener("click", (event)  => {
    let tgt = event.target;
    if (tgt.className != "add-project" && tgt.className != "display-projects") {
        tgt.id = 'active';
        // Need to make it so that if the add task btn is clicked
        // when there is an active project then that task is added
        // to the active project tasks list O_o
    }
})