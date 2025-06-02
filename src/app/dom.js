import { allTasks, createTask } from './todo';
import { allProjects, creatProject} from './project';

const inboxBtn = document.querySelector('.nav-inbox');
const todayBtn = document.querySelector('.nav-daily');
const weeklyBtn = document.querySelector('.nav-weekly');

const projectsContainer = document.querySelector('.projects-nav');

const addProjectBtn = document.querySelector('.add-project');

function renderProjectForm() {
    const modalContainer = document.querySelector('.modal');
    const formModal = document.querySelector('.form-modal')

    const nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = 'project-name';
    nameInputLabel.textContent = 'Name'
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'project-name';
    nameInput.placeholder = 'Default';

    const submitProjectBtn = document.createElement('button');
    submitProjectBtn.id = 'submit-project';
    submitProjectBtn.textContent = 'Add Project'

    formModal.append(nameInputLabel, nameInput, submitProjectBtn)

    if (modalContainer.style.display = "none") {
        modalContainer.style.display = 'flex';
    } else {
        modalContainer.style.display = 'none';
    }

}

addProjectBtn.addEventListener('click', e => {
    renderProjectForm()
})