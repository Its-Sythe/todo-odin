import './content';
import './sidebar';
import { allTasks } from '../logic/logic';
import { contentManager } from './content';

const allTasksBtn = document.getElementById("myTasks");
allTasksBtn.addEventListener(
    "click", () => {
        contentManager.displayAddBtn();
        contentManager.displayAllTasks(allTasks);
        contentManager.handleDelete();
    }
)