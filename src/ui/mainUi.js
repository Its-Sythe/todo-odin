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
        newProject.id = project.projectName;
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
    if (!allProjectNames.includes(projectName) && projectName != "") {
            const newProject = projectManager.createProject(projectName);
            allProjects.push(newProject);
            
            const newProjectBtn = getButton();
            newProject.id = projectName;
            newProjectBtn.textContent = projectName;
            projectContainer.append(newProjectBtn)
            
    } else if (allProjectNames.includes(projectName)) {
        return `${projectName} already exists!`
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
        displayProjectModal();
        const result = validateProjectForm();
        console.log(result);
        console.log(allProjects);
    }
)

document.getElementById("allTasksTab").addEventListener(
    "click", contentManager.dipslayAllTasks
);


