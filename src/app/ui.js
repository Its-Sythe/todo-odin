import { Task, Project, Todo } from './logic'

export const ui =(function() {
    let todo = new Todo();
   
    function render() {
        renderDefaultProjects(todo.getDefaults());
        renderProjects(todo.getProjects());
        handleClicks()
    }

    function createProjectBtn(project) {
        const projectBtn = document.createElement("button");
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
                tgt.className = tgt.className == "inactive" ? "active" : "inactive" 
                renderProjectTasks(tgtProject)            
                renderAddTaskBtn(tgtProject);
            }

            if (tgt.className = "add-project" && !(tgt.textContent == "Inbox" || tgt.textContent == "Today" || tgt.textContent == "Upcoming")) {
                createForm("project");
            } 


        })

        document.querySelector(".main-content").addEventListener("click", (e) => {
            let tgt = e.target;
            e.preventDefault();

            if (tgt.className = "add-task") {
                createForm("task");
            }
        })

        document.querySelector(".form-modal").addEventListener("click", (e) => {
            e.preventDefault();
            let tgt = e.target;
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

            const taskDue = document.createElement("input");
            taskDue.type = "date";

            const taskPriority = document.createElement("select");
            taskPriority.id = 'task-priority';

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
            optionsContainer.id = "task-options-container"

            const submitTaskModal = document.createElement("button");
            submitTaskModal.id = "submit-task";
            submitTaskModal.textContent = "Submit";

            const closeTaskModal = document.createElement("button");
            closeTaskModal.id = "close-task";
            closeTaskModal.textContent = "Cancel"

            optionsContainer.append(submitTaskModal, closeTaskModal)

            formModal.append(taskName, taskDue, taskPriority, optionsContainer);
        } else if (type == "project") {
            formModal.id = "project-form"
            formModal.innerHTML = ""

            const projectName = document.createElement("input");
            projectName.id = "project-form-name";

            const optionsContainer = document.createElement("div");
            optionsContainer.id = "options-container"
            
            const submitProject = document.createElement("button");
            submitProject.id = "submit-project";
            submitProject.textContent = "Add Project";

            const closeProjectModal = document.createElement("button");
            closeProjectModal.id = "close-project-modal";
            closeProjectModal.textContent = "Cancel";
            
            optionsContainer.append(submitProject, closeProjectModal)
            
            formModal.append(projectName, optionsContainer)
        }
    } 

    function renderDefaultProjects(defaults) {
        const defaultsContainer = document.querySelector(".default-projects");
        
        for (let i = 0; i < defaults.length; i++) {
            defaultsContainer.append(createProjectBtn(defaults[i]));
        }
    }

    function renderProjects(projects) {
        const userProjects = document.querySelector(".user-projects");
        for (let i = 3; i < projects.length; i++) {
            userProjects.append(createProjectBtn(projects[i]))
        }
    }

    function renderProjectTasks(project) {
        const mainContent = document.querySelector(".main-content");
        mainContent.innerHTML = ""
        let tasks = project.tasks;
        if (tasks.length == 0) return;

        for (let i = 0; i < tasks.length; i++) {
            mainContent.append(createTaskCard(tasks[i]));
        }
    }

    function renderAddTaskBtn(project) {
        const mainContent = document.querySelector(".main-content");

        const activeProject = document.createElement("p");
        activeProject.textContent = project.name

        const addTaskBtn = document.createElement("button");
        addTaskBtn.className = "add-task"
        addTaskBtn.textContent = "Add Task";
        
        mainContent.append(activeProject, addTaskBtn)
    }
    

    return {
        render
    }
})();
