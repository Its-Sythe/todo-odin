import { taskManager } from "./tasks";
import { projectManager } from "./project";

export const allTasks = [];
export const allProjects = [];

const firstTask = taskManager.createTask(
    "To Do Project", "To Doing The To Do", "2025-05-20", "Lowest", "Default"
);

const secondTask = taskManager.createTask(
    "Not To Do", "To Not Doing The To Do", "2025-05-20", "Highest", "Default"
)

allTasks.push(firstTask);

const defaultProject = projectManager.createProject("Default");

projectManager.addTask(defaultProject, firstTask, secondTask);

console.log(defaultProject)