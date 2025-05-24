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

    const taskTitles = [];
    if (allTasks.length != 0) {
        for (let t = 0; t < allTasks.length; t++) {
            taskTitles.push(allTasks[t].title);
        }
    }

    if (!taskTitles.includes(newTask.title)) {
        allTasks.push(newTask);
        return newTask;
    } else if (taskTitles.includes(newTask.title)) {
        return `${newTask.title} already exists.`
    }
}


export { allTasks, createTask }