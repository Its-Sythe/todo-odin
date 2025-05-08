const handleTasks = (function() {
    function createTasks(title, desc, due, priority, project, complete = false, uniqueId = crypto.randomUUID()) {
        return {
            title, desc, due, priority, project, complete, uniqueId
        }
    }

    function changeDesc(task, desc) {
        return task.desc = desc;
    }

    function completeTask(task, status) {
       return task.complete = status;
    }

    function changePriority(task, priority) {
        return task.priority = priority
    }

    function changeDue(task, due) {
        return task.due = due;
    }

    function changeProject(task, project) {
        return task.project = project;
    }

    return {
        changeDesc,
        createTasks,
        completeTask,
        changePriority,
        changeDue,
        changeProject
    }
})


export const taskHandler = handleTasks()
