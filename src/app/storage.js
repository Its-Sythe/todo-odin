import { allProjects } from "./project";
import { allTasks } from "./todo"

export const storageManager = (function() {
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(allTasks));
    }

    function saveProjects() {
        localStorage.setItem("projects", JSON.stringify(allProjects));
    }

    function saveProjectTasks(project) {
        localStorage.setItem("projectsTasks", JSON.stringify(project.tasks));
    }
    return {
        saveTasks,
        saveProjects,
        saveProjectTasks
    }
})();
