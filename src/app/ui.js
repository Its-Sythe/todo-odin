import { Task, Project, Todo, Storage } from './logic'

export const ui =(function() {
    let todo = Storage.loadFromStorage() || new Todo()
   
    function render() {
        Storage.loadToStorage(new Todo());
        renderDefaultProjects(todo.getDefaults());
        renderProjects(todo.getProjects());
        handleClicks()
    }

    function createProjectBtn(project) {
        const projectBtn = document.createElement("li");
        projectBtn.id = "project-btn";
        projectBtn.className = "inactive"
        projectBtn.textContent = project.name;        
        return projectBtn;
    }

    function handleClicks() {
        document.querySelector(".side-nav").addEventListener("click", (e) => {
            e.preventDefault();
            let tgt = e.target;

            if (tgt.id == "project-btn") {
                let tgtProject = todo.getProject(tgt.textContent)
                handleActive(tgt)
                renderProjectTasks(tgtProject)            
            }

            if (tgt.className == "add-project" && !(tgt.textContent == "Inbox" || tgt.textContent == "Today" || tgt.textContent == "Upcoming")) {
                createForm("project");
            } 
        })

        document.querySelector(".main-content").addEventListener("click", (e) => {
            let tgt = e.target;
            if (tgt.className == "add-task") {
                createForm("task");
            }
        })

        document.querySelector(".form-modal").addEventListener("click", (e) => {
            let tgt = e.target;
            e.preventDefault();
            if (tgt.id == "submit-project") {
                let result = validateForm("project");
                if (result != undefined || result != null) {
                    todo.addProject(result);
                    renderProjects(todo.getProjects());
                }
            }
            if (tgt.className == "close-btn") {
                document.querySelector(".form-modal").innerHTML = ""
                document.querySelector(".form-modal").style.display = "none"
            }
            if (tgt.id == "submit-task") {
                let result = validateForm("task");
                let tgtProject = todo.getProject(findActive());
                
                tgtProject.addTask(result);
                renderProjectTasks(tgtProject);
                Storage.loadToStorage(todo);
            }
        })
    }

    function createTaskCard(task) {
        const taskCard = document.createElement("div");
        taskCard.id = "task-card";

        const cardName = document.createElement("p");
        cardName.textContent = task.name
        cardName.id = "card-title";

        const cardDue = document.createElement("p");
        cardDue.textContent = task.due;
        cardDue.id = "card-due";
        

        taskCard.append(cardName, cardDue);
        return taskCard;
    }

    function createForm(type) {
        const formModal = document.querySelector(".form-modal");
        formModal.style.display = formModal.style.display == "flex" ? "none" : "flex";
        
        if (type == "task") {
            formModal.id = "task-form";    
            formModal.innerHTML = ""

            const taskName = document.createElement("input");
            taskName.type = "text";
            taskName.id = "task-form-name";
            taskName.required = true;
            taskName.placeholder = "Enter Task Name"

            const taskDue = document.createElement("input");
            taskDue.type = "date";
            taskDue.id = "task-form-due"
            taskDue.required = true;

            const taskPriority = document.createElement("select");
            taskPriority.id = 'task-form-priority';

            let highPriority = document.createElement('option');
            highPriority.text = 'High';
            
            let mediumPriority = document.createElement('option');
            mediumPriority.text = 'Medium';

            let lowPriority = document.createElement('option');
            lowPriority.text = 'Low';

            taskPriority.options.add(highPriority, 1);
            taskPriority.options.add(mediumPriority, 2);
            taskPriority.options.add(lowPriority, 3);

            const optionsContainer = document.createElement("div");
            optionsContainer.id = "options-container"

            const submitTaskModal = document.createElement("button");
            submitTaskModal.id = "submit-task";
            submitTaskModal.textContent = "Submit";

            const closeTaskModal = document.createElement("button");
            closeTaskModal.id = "close-task";
            closeTaskModal.textContent = "Cancel"
            closeTaskModal.className = "close-btn"

            optionsContainer.append(submitTaskModal, closeTaskModal)

            formModal.append(taskName, taskDue, taskPriority, optionsContainer);
        } else if (type == "project") {
            formModal.id = "project-form"
            formModal.innerHTML = ""

            const projectName = document.createElement("input");
            projectName.id = "project-form-name";
            projectName.required = true;
            projectName.placeholder = "Enter Project Name"

            const optionsContainer = document.createElement("div");
            optionsContainer.id = "options-container"
            
            const submitProject = document.createElement("button");
            submitProject.id = "submit-project";
            submitProject.textContent = "Add Project";

            const closeProjectModal = document.createElement("button");
            closeProjectModal.id = "close-project-modal";
            closeProjectModal.textContent = "Cancel";
            closeProjectModal.className = "close-btn"
            
            optionsContainer.append(submitProject, closeProjectModal)
            
            formModal.append(projectName, optionsContainer)
        }
    } 

    function validateForm(type) {
        const formModal = document.querySelector(".form-modal");
        if (type == "project") {
            const projectName = document.getElementById("project-form-name");
            if (projectName.value == '' || projectName.value == null) {
                projectName.setCustomValidity("Please enter a project name ;p")
            } else {
                let newProject = new Project(projectName.value)
                formModal.style.display = "none"
                return newProject;
            }
        }    
        if (type == "task") {
            const taskName = document.getElementById("task-form-name");
            const taskDue = document.getElementById("task-form-due");
            const taskPriority = document.getElementById("task-form-priority")

            if (taskName.value == "" || taskName.value == null) {
                taskName.setCustomValidity("Please enter a task name ;p")
            } else if (taskDue.value == '' || taskDue.value == null) {
                taskDue.setCustomValidity("Please enter a valid date O_o")
            } else if (taskPriority.value == '' || taskPriority.value == null) {
                taskPriority.setCustomValidity("Please enter a valid option")
            } else {
                let newTask = new Task(taskName.value, taskDue.value, taskPriority.value);
                formModal.style.display = "none" 
                return newTask;
            }
        }
    }

    function renderDefaultProjects(defaults) {
        const defaultsContainer = document.querySelector(".default-projects");
        
        for (let i = 0; i < defaults.length; i++) {
            defaultsContainer.append(createProjectBtn(defaults[i]));
        }
    }

    function renderProjects(projects) {
        document.querySelector(".user-projects").innerHTML = ""
        const userProjects = document.querySelector(".user-projects");
        for (let i = 3; i < projects.length; i++) {
            userProjects.append(createProjectBtn(projects[i]))
        }
    }

    function renderProjectTasks(project) {
        const mainContent = document.querySelector(".main-content");
        mainContent.innerHTML = ""
        renderAddTaskBtn(project);
        let tasks = project.tasks;
        if (tasks.length == 0) return;

        for (let i = 0; i < tasks.length; i++) {
            mainContent.append(createTaskCard(tasks[i]));
        }
    }

    function renderAddTaskBtn(project) {
        const mainContent = document.querySelector(".main-content");

        const containerMain = document.createElement("div")
        containerMain.id = "basic-container"

        const activeProject = document.createElement("p");
        activeProject.id = "active-project-name"
        activeProject.textContent = project.name

        const addTaskBtn = document.createElement("button");
        addTaskBtn.className = "add-task"
        addTaskBtn.textContent = "Add Task";
        
        containerMain.append(activeProject, addTaskBtn)
        mainContent.append(containerMain)
    }
    
    function handleActive(target) {
        let allChildNodes = Array.from(target.parentNode.childNodes);
        if (allChildNodes.length == 0) return;

        if (allChildNodes.some(nodes => nodes.className == "active")) {
            let activeProject = allChildNodes.find(nodes => nodes.className == "active");
            activeProject.className = "inactive";
            target.className = "active";
            return target;
        } else {
            target.className = "active"
            return target;
        }
    }

    function findActive() {
        let container = document.querySelector(".side-nav").childNodes;
        for (let i = 0; i < container.length; i++) {
            if (container[i].tagName == "DIV") {
                let childNodes = Array.from(container[i].childNodes);
                if (childNodes.some(nodes => nodes.className == "active")) {
                    let tgt = childNodes.find(nodes => nodes.className == "active");
                    return tgt.textContent;
                }
            }
        }
    }

    return {
        render
    }
})();
