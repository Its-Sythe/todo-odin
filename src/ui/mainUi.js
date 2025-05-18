import './sidebar';
import { allProjects, allTasks } from '../logic/mainLogic';

function getDiv() {
    return document.createElement('div');
}

function getButton() {
    return document.createElement("button");
}

export { getDiv, getButton }

const content = document.querySelector(".content");

function dipslayAllTasks() {
    return content.append(allTasks)
}


document.getElementById("allTasksTab").addEventListener("click", dipslayAllTasks);