// This file will be handling the creation of todos
// and the extra logic related to todos

let allTasks = [
    {
        title: 'Hello',
        due: '2025-05-10',
        priority: 'Low',
        project: 'Default'
    }
];

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
            return task;
        }
        return false;
    }
    allTasks.push(task);
    return task;
}

export { allTasks, createTask }