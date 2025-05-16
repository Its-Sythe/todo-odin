const handleTasks = (function() {
    function createTask(title, desc, due, priority, project) {
        return {
            title, desc, due, priority, project
        }
    }

    function makeChange(task, type, change) {
        // Type = title, desc, due, priority, project
        if (task[type]) {
            return task[type] = change;
        }
    }

    return {
        createTask,
        makeChange
    }
})

export const taskManager = handleTasks();