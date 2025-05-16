import { taskManager } from "./tasks";
import { projectManager } from "./project";

export const allTasks = [];
export const allProjects = [];

const firstTask = taskManager.createTask(
    "To Do Project", "To Doing The To Do", "2025-05-20", "Lowest", "Default"
);
allTasks.push(firstTask);

console.log(allTasks)

const defaultProject = projectManager.createProject("Default");
defaultProject.projectTasks.push(firstTask)
console.log(defaultProject)

projectManager.deleteTask("Some Random Project", defaultProject);           
console.log(defaultProject);