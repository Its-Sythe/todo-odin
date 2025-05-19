import './sidebar';
import { allProjects, allTasks } from '../logic/mainLogic';
import { contentManager } from './content';
import { projectManager } from '../logic/project';

function getDiv() {
    return document.createElement('div');
}

function getButton() {
    return document.createElement("button");
}

export { getDiv, getButton };

const projectContainer = document.getElementById('projectsContainer');

allProjects.forEach(project => {
        const newProject = getButton();
        newProject.id = "project";
        newProject.textContent = project.projectName;
        projectContainer.append(newProject)
})

function displayProjectModal() {
    const projectModal = document.querySelector(".projectModal");
    if (projectModal.style.display == "" || projectModal.style.display == "none") {
        projectModal.style.display = "flex";
        return;
    } else if (projectModal.style.display == "flex") {
        projectModal.style.display = "none";
        return;
    }
}

function validateProjectForm() {
    const projectForm = document.forms["projectForm"];
    const projectName = projectForm['projectName'].value;
    const allProjectNames = [];
    for (let i = 0; i < allProjects.length; i++) {
        allProjectNames.push(allProjects[i].projectName);
    }
    if (projectName != "") {
        if (!allProjectNames.includes(projectName)) {
                const newProject = projectManager.createProject(projectName);
                allProjects.push(newProject);
                
                const newProjectBtn = getButton();
                newProjectBtn.id = "project"
                newProjectBtn.textContent = projectName;
                projectContainer.append(newProjectBtn)
                
        } else if (allProjectNames.includes(projectName)) {
            return `${projectName} already exists!`
        }
    } else {
        projectForm['projectName'].style.border = "1px solid red";
        return `Fill Form`
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

document.getElementById("submitProject").addEventListener(
    "click", (event) => {
        event.preventDefault();
        const result = validateProjectForm();
        if (result != "Fill Form") {
            displayProjectModal();
        }
    }
)

document.getElementById("project").addEventListener(
    "click", (event) => {
        let tgt = event.target;
        for (let i = 0; i < allProjects.length; i++) {
            if (allProjects[i].projectName == tgt.textContent) {
                contentManager.displaySpecificTasks(allProjects[i].projectTasks);
            }
        }
    }
)

document.getElementById("allTasksTab").addEventListener(
    "click", contentManager.dipslayAllTasks
);


