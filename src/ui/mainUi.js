import './sidebar';
import { allProjects, allTasks } from '../logic/mainLogic';
import { contentManager } from './content';

function getDiv() {
    return document.createElement('div');
}

function getButton() {
    return document.createElement("button");
}

export { getDiv, getButton }


document.getElementById("allTasksTab").addEventListener(
    "click", contentManager.dipslayAllTasks
);