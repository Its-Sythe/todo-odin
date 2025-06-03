import { allTasks, createTask } from './todo';
import { allProjects, createProject} from './project';

const inboxBtn = document.querySelector('.nav-inbox');
const todayBtn = document.querySelector('.nav-daily');
const weeklyBtn = document.querySelector('.nav-weekly');
const projectsContainer = document.querySelector('.projects-nav');
const addProjectBtn = document.querySelector('.add-project');

const modalContainer = document.querySelector('.modal');

function createProjectForm() {
    const formModal = document.querySelector('.form-modal');

    const modalFormName = document.createElement('p');
    modalFormName.id = 'modal-form-name';
    modalFormName.textContent = 'Add A Project';

    const nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'project-name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'project-name';
    nameInput.placeholder = 'Default';

    nameInputLabel.appendChild(nameInput);

    const submitProjectBtn = document.createElement('button');
    submitProjectBtn.id = 'submit-project';
    submitProjectBtn.textContent = 'Add Project';

    const closeProjectModalBtn = document.createElement('p');
    closeProjectModalBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>close</title><path d="M16 17H15V16H14V15H13V14H12V13H10V14H9V15H8V16H7V17H6V16H5V15H6V14H7V13H8V12H9V10H8V9H7V8H6V7H5V6H6V5H7V6H8V7H9V8H10V9H12V8H13V7H14V6H15V5H16V6H17V7H16V8H15V9H14V10H13V12H14V13H15V14H16V15H17V16H16Z" /></svg>';
    closeProjectModalBtn.id = 'close-project-modal-btn';

    if (formModal) {
        formModal.innerHTML = '';
        formModal.id = 'project-form-modal';
        formModal.name = 'project-form'
        formModal.append(modalFormName, nameInputLabel, submitProjectBtn, closeProjectModalBtn);
        return document.forms[formModal.name];
    }
}

function validateProjectForm(form) {
    const projectFormName = form['project-name'].value;
    if (projectFormName != '') {
        if (allProjects.some(projects => projects.name !== projectFormName)) {
            createProject(projectFormName);
            return true;
        } else {
            return `${projectFormName} already exists`
        }
    } else if (projectFormName == '') {
        form['project-name'].style.border = '1px solid red';
    }
}   

function renderAndValidateProjectForm() {
    let projectForm = createProjectForm();

    const submitProjectFormBtn = projectForm['submit-project'];
    submitProjectFormBtn.addEventListener('click', e => {
        e.preventDefault();
        let validationResult = validateProjectForm(projectForm);
        if (validationResult === true) {
            modalContainer.style.display = 'none';
            return true;
        }
    });
    return false;
}

addProjectBtn.addEventListener('click', e => {
    e.preventDefault();
    if (modalContainer.style.display === 'none') {
        modalContainer.style.display = 'flex';
    } else if (modalContainer.style.display === 'flex') {
        modalContainer.style.display = 'none';
    }
    
})

// function createTaskCard(task) {
//     let content = document.querySelector(".content");
//     let taskCard = document.createElement("div");
//     taskCard.className = "task-card";

//     let cardDetails = document.createElement("div");
//     cardDetails.className = "card-details";
//     let cardTitle = document.createElement('p');
//     cardTitle.id = "card-title";
//     cardTitle.textContent = task.title;
//     let cardDue = document.createElement('p');
//     cardDue.id = "card-due";
//     cardDue.textContent = task.due;
    
//     cardDetails.append(cardTitle, cardDue);

//     let cardOptions = document.createElement("div");
//     cardOptions.className = "card-options";
//     let editBtn = document.createElement("button");
//     editBtn.id = 'edit-task';
//     editBtn.textContent = 'Edit';
//     let deleteBtn = document.createElement("button");
//     deleteBtn.id = 'delete-task';
//     deleteBtn.textContent = 'Delete';

//     cardOptions.append(editBtn, deleteBtn)

//     taskCard.append(cardDetails, cardOptions)
//     content.append(taskCard)
// }

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
