// This file will be handling the creation of todos
// and the extra logic related to todos

import { storageManager } from "./storage";

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function createTask(title, due, priority, project) {
    let task = {
        title, due, priority, project
    }

    const taskProto = Object.getPrototypeOf(task);

    taskProto.editTask = function(type, change) {
        return task[type] = change;
    }
    taskProto.addDesc = function(content) {
        return task['desc'] = content;
    }
    
    if (allTasks.length != 0) {
        if (allTasks.some(tasks => tasks.title !== task.title)) {
            allTasks.push(task);
            storageManager.saveTasks();
            return task;
        }
        return false;
    }
    allTasks.push(task);
    storageManager.saveTasks();
    return task;
}

export { allTasks, createTask }