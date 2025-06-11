import { allProjects } from "./project";
import { allTasks } from "./todo"

export const storageManager = (function() {
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(allTasks));
    }

    function saveProjects() {
        localStorage.setItem("projects", JSON.stringify(allProjects));
    }

    return {
        saveTasks,
        saveProjects
    }
})();