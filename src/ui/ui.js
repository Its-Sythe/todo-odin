import './content';
import './sidebar';
import { allTasks } from '../logic/logic';
import { contentManager } from './content';

contentManager.displayAllTasks(allTasks);

const deleteBtn = document.getElementById("deleteTask");

deleteBtn.addEventListener("click", () => {
    console.log("Helo")
})