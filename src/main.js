import "./styles.css";
import { taskHandler } from "./task.js";
import { allProjects, projectHandler } from "./project.js";

const taskCreator = taskHandler.createTasks;
const projectCreator = projectHandler.createProject;

const defaultProject = projectCreator("Default");

const defaultTask = taskCreator(
    'To Do Project',
    'To doing the to do project',
    '2025-05-10',
    'Highest',
    defaultProject.name
);

defaultProject.allTasks.push(defaultTask);

console.log(defaultTask);