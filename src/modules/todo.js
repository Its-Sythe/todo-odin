let allTasks = [];

function createTask(title, due, priority) {
    const newTask = {
        title, due, priority
    }

    newTask.editTask = function(context, change) {
        if (newTask[context]) {
            return newTask[context] = change;
        }
    }

    if (!allTasks.some(tasks => tasks.title === newTask.title)) {
        allTasks.push(newTask);
        return newTask;
    } else {
        return `${newTask.title} already exist`;
    }
}


export { allTasks, createTask }