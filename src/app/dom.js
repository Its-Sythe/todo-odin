import { allTasks, createTask } from './todo';
import { allProjects, createProject} from './project';

const inboxBtn = document.querySelector('.nav-inbox');
const dailyBtn = document.querySelector('.nav-daily');
const weeklyBtn = document.querySelector('.nav-weekly');
const popUpProject = document.querySelector('.add-project');
const modalContainer = document.querySelector('.modal');
const content = document.querySelector(".main-content");

const uiManager = (function() {
    function validateProject(value) {
        if (value !== '' || value !== null) {
            createProject(value);
        }
    }

    function createTaskCard(task) {
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
        let editBtn = document.createElement("p");
        editBtn.id = 'edit-task';
        editBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>note-edit</title><path d="M21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H11V19.13L19.39 10.74C19.83 10.3 20.39 10.06 21 10M14 4.5L19.5 10H14V4.5M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z" /></svg>';
        let deleteBtn = document.createElement("p");
        deleteBtn.id = 'delete-task';
        deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'

        cardOptions.append(editBtn, deleteBtn)

        taskCard.append(cardDetails, cardOptions)
        content.append(taskCard)
    }

    function displayAllTasks() {
        if (allTasks.length != 0) {
            for (let t = 0; t < allTasks.length; t++) {
                createTaskCard(allTasks[t]);
            }
        }
    }

    return {
        validateProject,
        displayAllTasks
    }
})();

popUpProject.addEventListener('click', e => {
    let projectPromptValue = prompt('Enter Project Name: ');
    uiManager.validateProject(projectPromptValue);
})

inboxBtn.addEventListener('click', e => {
    content.innerHTML = '';
    uiManager.displayAllTasks();
})


// function createProjectBtn(name){
//     const projectContainer = document.querySelector(".display-projects");
//     const projectBtn = document.createElement("button");
//     projectBtn.className = "project";
//     projectBtn.textContent = name;

//     projectContainer.append(projectBtn);
// }

// function validateTaskForm() {
//     let taskModal = document.querySelector(".task-modal")
//     const taskForm = document.forms['task-form'];
//     const taskName = taskForm['task-name'].value;
//     const taskDue = taskForm['task-due'].value;
//     const taskPriority = taskForm['task-priority'].value;
//     const taskProject = taskForm['task-project'].value;

//     if (taskName != "" && taskDue != "" && taskProject != "") {
//         let newTask = createTask(
//             taskName, taskDue, taskPriority, taskProject
//         )
//         taskModal.style.display = "none";
//         return newTask;
//     } else if (taskName == "" || taskDue == "") {
//         alert("Fill the form please")
//     }
// }

// function displayProjectTasks(project) {
//     if (project.tasks.length != 0) {
//         for (let p = 0; p < project.tasks.length; p++) {
//             let currentTaskCard = createTaskCard(project.tasks[p]);
//             return currentTaskCard;
//         }
//     }
// }

// function handleActiveProject(event) {
//     let tgt = event.target;
//     let parentTgt = tgt.parentNode;
//     let arrayOfChildNodes = Array.from(parentTgt.childNodes);
//     let result = arrayOfChildNodes.some(child => child.id === 'active');
//     if (tgt.className !== 'project') {
//         return false;
//     } 

//     if (result === false) {
//         return tgt.id = 'active';
//     } else if (result === true) {
//         let activeProject = arrayOfChildNodes.findIndex((child) => child.id == 'active');
//         arrayOfChildNodes[activeProject].id = 'inactive';
//         return tgt.id = 'active';
//     }
// }

// function handleAddTaskToActivePorject(project, task) {
//     if (project.tasks.some(projectTask => projectTask.title !== task.title)) {
//         project.tasks.push(task);
//         return;
//     } else if (project.tasks.some(projectTask => projectTask.title) === task.title) {
//         return `${task} already exists`
//     }
// }

// const addTaskBtn = document.querySelector(".add-task");
// addTaskBtn.addEventListener("click", displayTaskModal);


// const submitTaskBtn = document.getElementById("submit-task");
// submitTaskBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     const task = validateTaskForm();
//     createTaskCard(task);
// });
