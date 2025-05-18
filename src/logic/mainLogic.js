import { taskManager } from "./task";
import { projectManager } from "./project";

const allTasks = [];
const allProjects = [];

const newTask = taskManager.createTask(
    "To Do Project",
    "To Doing the To Do",
    "2025-05-20"
)

const extraTask = taskManager.createTask(
    "Hello There",
    "Just a greeting Message",
    "2025-05-20"
)

allTasks.push(newTask, extraTask);
if (allTasks.includes(newTask)) {
    taskManager.changePriority(newTask, "High");
    taskManager.changeProject(newTask, "This Works!")
}

const newProject = projectManager.createProject("Default");
const extraProject = projectManager.createProject("Extra")
allProjects.push(newProject, extraProject);
newProject.projectTasks.push(newTask, extraTask);

projectManager.deleteTask(newProject, newTask);
allTasks.splice(allTasks.indexOf(newTask), 1);
projectManager.deleteProject(allProjects, extraProject)

console.log(allProjects);
console.log(allTasks);