import { allTasks, createTask } from './todo';
import { allProjects, projectManager} from './project';
import { format } from 'date-fns';
import { storageManager } from './storage';

const inboxBtn = document.querySelector('.nav-inbox');
const dailyBtn = document.querySelector('.nav-daily');
const weeklyBtn = document.querySelector('.nav-weekly');
const popUpProject = document.querySelector('.add-project');
const modalContainer = document.querySelector('.modal');
const content = document.querySelector(".main-content");
const projectContainer = document.querySelector(".projects-nav");

const uiManager = (function() {
   function createProjectForm() {
        modalContainer.id = 'project-modal';
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
        submitProjectBtn.classList.add('submit-btn');
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

    function validateProjectForm() {
        const projectForm = document.forms['project-form'];
        if (projectForm['project-name'].value === '') {
            projectForm['project-name'].style.border = '1px solid red';
            return false;
        }

        projectManager.createProject(projectForm['project-name'].value);
        modalContainer.style.display = 'none';
        displayAllProjects();
        return true;
    }

    function createProjectBtn(name){
        const projectBtn = document.createElement("li");
        projectBtn.classList.add("project");
        projectBtn.textContent = name;

        projectContainer.append(projectBtn);
    }

    function displayAllProjects() {
        projectContainer.innerHTML = '';
        if (allProjects.length != 0) {
            for (let p = 0; p < allProjects.length; p++) {
                createProjectBtn(allProjects[p].name);
            }
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

        if (task.priority === 'High') {
            taskCard.style.boxShadow = '0px 0px 20px 0px rgb(255, 50, 100)';
        } else if (task.priority === 'Medium') {
            taskCard.style.boxShadow = '0px 0px 20px 0px rgb(50, 100, 205)';
        } else if (task.priority === 'Low') {
            taskCard.style.boxShadow = '0px 0px 20px 0px rgb(100, 255, 100)';
        }
        
        cardOptions.append(editBtn, deleteBtn)

        taskCard.append(cardDetails, cardOptions)
        content.append(taskCard)
    }

    function createTaskForm() {
        modalContainer.id = 'task-modal';
        const taskModal = document.querySelector('.form-modal');
        taskModal.id = 'task-form-modal';
        taskModal.name = 'task-form';

        const taskNameLabel = document.createElement('label');
        taskNameLabel.htmlFor = 'task-name';
        const taskNameInput = document.createElement('input');
        taskNameInput.id = 'task-name';
        taskNameInput.placeholder = 'To Doing The To Do';
        
        taskNameLabel.appendChild(taskNameInput);

        const modalOptions = document.createElement('div');
        modalOptions.id = 'modal-options';

        const taskDue = document.createElement('input');
        taskDue.type = 'date';
        taskDue.id = 'task-due';
        
        const taskPriority = document.createElement("select");
        taskPriority.id = 'task-priority';
        let highPriority = document.createElement('option');
        highPriority.text = 'High';
        highPriority.style.backgroundColor = 'rgb(255, 50, 100)';
        let mediumPriority = document.createElement('option');
        mediumPriority.text = 'Medium';
        mediumPriority.style.backgroundColor = 'rgb(50, 150, 255)';
        let lowPriority = document.createElement('option');
        lowPriority.text = 'Low';
        lowPriority.style.backgroundColor = 'rgb(50, 255, 100)';
        taskPriority.options.add(highPriority, 1);
        taskPriority.options.add(mediumPriority, 2);
        taskPriority.options.add(lowPriority, 3);

        modalOptions.append(taskDue, taskPriority);

        const taskModalSubmit = document.createElement('button');
        taskModalSubmit.classList.add('submit-btn');
        taskModalSubmit.id = 'submit-task';
        taskModalSubmit.textContent = 'Add Task';

        const closeTaskModalBtn = document.createElement('p');
        closeTaskModalBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>close</title><path d="M16 17H15V16H14V15H13V14H12V13H10V14H9V15H8V16H7V17H6V16H5V15H6V14H7V13H8V12H9V10H8V9H7V8H6V7H5V6H6V5H7V6H8V7H9V8H10V9H12V8H13V7H14V6H15V5H16V6H17V7H16V8H15V9H14V10H13V12H14V13H15V14H16V15H17V16H16Z" /></svg>';
        closeTaskModalBtn.id = 'close-task-modal-btn';

        if (taskModal) {
            taskModal.innerHTML = '';
            taskModal.append(closeTaskModalBtn, taskNameLabel, modalOptions, taskModalSubmit);
        }
    }

    function validateTaskForm() {
        const taskForm = document.forms['task-form'];
        const taskName = taskForm['task-name'].value;
        const taskDue = taskForm['task-due'].value;
	const taskPriority = taskForm['task-priority'].value;

        if (taskName != "" && taskDue != "") {
            let activeEle = document.getElementById('active');
            let newTask = createTask(
                taskName, taskDue, taskPriority
            )
            if (activeEle !== null) {
                let activeProject = activeEle.textContent;
                for (let projects in allProjects) {    
                    let currentProject = allProjects[projects];
                    if (currentProject.name === activeProject) {
                        newTask.project = currentProject.name;
                        currentProject.addTask(newTask);
                        content.innerHTML = '';
                        displayProjectTasks(currentProject.name);
                        storageManager.saveProjects();
                        storageManager.saveTasks();
                    }
                }
                if (activeEle.className === 'nav-inbox') {
                    content.innerHTML = '';
                    newTask.project = 'inbox-task';
                    displayAllTasks();
                }
            }
            modalContainer.style.display = "none";
        } else if (taskName == "" || taskDue == "") {
            alert("Fill the form please")
        } 
    }

    function displayAllTasks() {
        content.innerHTML = '';
        displayAddTaskBtn();
        if (allTasks.length != 0) {
            for (let t = 0; t < allTasks.length; t++) {
                createTaskCard(allTasks[t]);
            }
        }
    }

    function displayAddTaskBtn() {
        const addTaskBtn = document.createElement('button');
        addTaskBtn.classList.add('add-task-btn');
        addTaskBtn.textContent = 'Add Task';

        content.appendChild(addTaskBtn);
    }

    function displayProjectTasks(projectName) {
        if (allProjects.some(projects => projects.name === projectName)) {
            for (let projects in allProjects) {
                let currentProject = allProjects[projects];
                if (currentProject.name === projectName) {
                    displayAddTaskBtn();
                    if (currentProject.tasks.length >= 1) {
                        for (let p = 0; p < currentProject.tasks.length; p++) {
                            createTaskCard(currentProject.tasks[p]);    
                        }
                    } else if (currentProject.tasks.length == 0) {
                        content.innerHTML = '';
                        displayAddTaskBtn();
                    }
                }
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
            inboxBtn.id = 'inactive';
            displayProjectTasks(tgt.textContent);
            return tgt.id = 'active';
        } else if (result === true) {
            inboxBtn.id = 'inactive';
            let activeProject = arrayOfChildNodes.findIndex((child) => child.id == 'active');
            arrayOfChildNodes[activeProject].id = 'inactive';
            displayProjectTasks(tgt.textContent)
            return tgt.id = 'active';
        }
    }

    function handleInboxActive() {
        let childArray = Array.from(projectContainer.childNodes);
        if (childArray.length != 0) {
            if (childArray.some(children => children.id !== 'active')) {
                inboxBtn.id = 'active';
            } else if (childArray.some(children => children.id === 'active') && inboxBtn.id === 'active') {
                let activeProject = childArray.findIndex(children => children.id === 'active');
                childArray[activeProject].id = 'inactive';
            }
        }
    }

    function handleToday(date) {
        let tdy = format(date, "yyyy-MM-dd");
        content.innerHTML = '';
        if (allTasks.some(tasks => tasks.due === tdy)) {
            let dailyTasks = allTasks.filter((tasks) => tasks.due == tdy);
            console.log(dailyTasks);
            if (dailyTasks.length > 1) {
                for (let t = 0; t < dailyTasks.length; t++) {
                    createTaskCard(dailyTasks[t]);
                }
            } else if (dailyTasks.length <= 1) {
                createTaskCard(dailyTasks[0]);
            }
        }  else {
            let tasksText = document.createElement('p')
            tasksText.textContent = 'No tasks for the day';
            tasksText.id = 'no-tasks';
            content.append(tasksText);
        }

    }

    function editTask(target) {
        let taskToEdit = allTasks.find((tasks) => tasks.title === target);
        if (taskToEdit) {
            // TO-DO
        }
    }

    function deleteTask(target) {
        let targetTask = allTasks.find((tasks) => tasks.title === target.textContent);
        let targetTaskProject = allProjects.find((projects) => projects.name === targetTask.project);
        console.log(targetTask)
        if (targetTask && targetTaskProject) {
            let targetIndex = allTasks.findIndex((tasks) => tasks.title === target.textContent);
            allTasks.splice(targetIndex, 1);
            targetTaskProject.deleteTask(targetTask);
            let tgtContainer = target.closest('.task-card');
            document.querySelector('.main-content').removeChild(tgtContainer);
            console.log(allTasks);
        } else if (targetTask.project === 'inbox-task') {
            let targetIndex = allTasks.findIndex((tasks) => tasks.title === target.textContent);
            allTasks.splice(targetIndex, 1);
            let tgtContainer = target.closest('.task-card');
            document.querySelector('.main-content').removeChild(tgtContainer);
        }
    }


    return {
        createProjectForm,
        validateProjectForm,
        createProjectBtn,
        displayAllProjects,
        displayAllTasks,
        createTaskForm,
        validateTaskForm,
        displayAddTaskBtn,
        displayProjectTasks,
        handleActiveProject,
        handleInboxActive,
        handleToday,
        deleteTask
    }
})();

document.querySelector('.form-modal').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.className === 'submit-btn') {
        if (e.target.id === 'submit-project') {
            uiManager.validateProjectForm();
        } else if (e.target.id === 'submit-task') {
            uiManager.validateTaskForm();
        }
    }

    if (e.target.tagName === 'path' || e.target.tagName === 'svg') {
        modalContainer.style.display = 'none';
    }
})

popUpProject.addEventListener('click', e => {
    modalContainer.style.display == 'none' ? modalContainer.style.display = 'flex' : modalContainer.style.display = 'none';
    uiManager.createProjectForm();
})

inboxBtn.addEventListener('click', e => {
    content.innerHTML = '';
    inboxBtn.id = 'active';
    uiManager.displayAllTasks();
    uiManager.handleInboxActive();
})

projectContainer.addEventListener('click', e => {
    if (e.target.className === 'projects-nav') {
        return;
    }
    content.innerHTML = '';
    uiManager.handleActiveProject(e);
    console.log(allProjects[0])
})

uiManager.displayAllProjects();

document.querySelector('.main-content').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.className === 'add-task-btn') {
        modalContainer.style.display == 'none' ? modalContainer.style.display = 'flex' : modalContainer.style.display = 'none';
        uiManager.createTaskForm();
    }
    
    if(e.target.tagName === 'path') {
        let callingBtn = e.target.closest('p').id;
        let expectedTarget = e.target.closest('.task-card');
        let target = expectedTarget.querySelector('#card-title');
        if (callingBtn === 'delete-task') {
            uiManager.deleteTask(target);
        }
    }
})

dailyBtn.addEventListener('click', e => {
    uiManager.handleToday(new Date());
    console.log(allProjects);
})

projectManager.fixLoadedProjects()