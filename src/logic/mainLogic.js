import { taskManager } from "./task";

const allTasks = []

const newTask = taskManager.createTask(
    "To Do Project",
    "To Doing the To Do",
    "2025-05-20"
)

allTasks.push(newTask);
if (allTasks.includes(newTask)) {
    taskManager.changePriority(newTask, "High");
    taskManager.changeProject(newTask, "This Works!")
}

console.log(allTasks)