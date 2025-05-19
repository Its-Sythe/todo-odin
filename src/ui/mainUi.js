import './sidebar';
import { allProjects, allTasks } from '../logic/mainLogic';
import { contentManager } from './content';

function getDiv() {
    return document.createElement('div');
}

function getButton() {
    return document.createElement("button");
}

export { getDiv, getButton };

function displayProjectModal() {
    const projectModal = document.querySelector(".projectModal");
    console.log(projectModal.style.display)
    if (projectModal.style.display == "" || projectModal.style.display == "none") {
        projectModal.style.display = "flex";
        return;
    } else if (projectModal.style.display == "flex") {
        projectModal.style.display = "none";
        return;
    }
}


document.getElementById("addToDoBtn").addEventListener(
    "click", () => {
        // some code here;
    }
)

document.getElementById("addProjectBtn").addEventListener(
    "click", displayProjectModal
)

document.getElementById("allTasksTab").addEventListener(
    "click", contentManager.dipslayAllTasks
);

const projectContainer = document.getElementById('projectsContainer');

allProjects.forEach(project => {
     const newProject = getButton();
    newProject.textContent = project.projectName;
    projectContainer.append(newProject)
})