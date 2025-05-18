import { taskManager } from "./task";
import { projectManager } from "./project";

const allTasks = [];
const allProjects = [];

const defaultProject = projectManager.createProject("Default");

const defaultTask1 = taskManager.createTask(
    "Hello",
    "Welcome to this humble space",
    "No Due"
);

const defaultTask2 = taskManager.createTask(
    "Defaults",
    "These are default tasks",
    "No Due"
);

const defaultTask3 = taskManager.createTask(
    "Enjoy",
    "Hopefully this is comfortable, enjoy",
    "No Due"
);


allTasks.push(defaultTask1, defaultTask2, defaultTask3);

defaultProject.projectTasks.push(defaultTask1, defaultTask2, defaultTask3);

allProjects.push(defaultProject);
