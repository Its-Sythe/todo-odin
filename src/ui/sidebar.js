import { allProjects } from "../logic/logic";

const sidebar = document.querySelector(".sidebar");

const tasksContainer = document.createElement("div");
tasksContainer.id = "tasksContainer";

const tasksContainerTitle = document.createElement("h1");
tasksContainerTitle.id = "tasksContainerTitle";
tasksContainerTitle.textContent = "時 Toki"

const allTasksBtn = document.createElement("button");
allTasksBtn.id = "myTasks";
allTasksBtn.textContent = "My Tasks";

tasksContainer.append(tasksContainerTitle, allTasksBtn);

const projectsContainer = document.createElement("div");
projectsContainer.id = "projectsContainer";

const projectContainerTitle = document.createElement('h1');
projectContainerTitle.id = "projectContainerTitle";
projectContainerTitle.textContent = "My Projects"

const addProjectBtn = document.createElement("button");
addProjectBtn.id = "addProjectBtn";
addProjectBtn.textContent = "Add Project";

projectsContainer.append(projectContainerTitle, addProjectBtn)

sidebar.append(tasksContainer, projectsContainer);


const sidebarManager = (function() {
    function displayAllProjects(projects) {
        if (projects.length != 0) {
            for (let p = 0; p < projects.length; p++) {
                const projectBtn = document.createElement("button");
                projectBtn.id = "project";
                projectBtn.textContent = projects[p].projectName;
                projectsContainer.append(projectBtn)
            }
        }
        
    }

    return {
        displayAllProjects
    }
})();

export { sidebarManager }