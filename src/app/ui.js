import { Task, Project, Todo } from './logic'

export const ui =(function() {
    function render() {
        let todo = new Todo();
        let defaultProjects = todo.getDefaults();

        renderDefaultProjects(defaultProjects);
        createForm("task")
    }

    function createProjectBtn(project) {
        const projectBtn = document.createElement("button");
        projectBtn.id = "project-btn";
        projectBtn.textContent = project.name;        
        return projectBtn;
    }

    function createForm(type) {
        const formModal = document.querySelector(".form-modal");

        if (type == "task") {
            formModal.id = "task-form";    

            const taskName = document.createElement("input");
            taskName.type = "text";
            taskName.className = "task-form-input"
            taskName.id = "task-form-name";

            const taskDue = document.createElement("input");
            taskDue.type = "date";

            formModal.append(taskName, taskDue)
        } else if (type == "project") {
            formModal.id = "project-form"
        }
    } 

    function renderDefaultProjects(defaults) {
        const defaultsContainer = document.querySelector(".default-projects");
        
        for (let i = 0; i < defaults.length; i++) {
            defaultsContainer.append(createProjectBtn(defaults[i]));
        }
    }

    return {
        render
    }
})();