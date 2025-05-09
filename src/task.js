const handleTasks = (function() {
    function createTasks(title, desc, due, priority, project, complete = false, uniqueId = crypto.randomUUID()) {
        return {
            title, desc, due, priority, project, complete, uniqueId
        }
    }

    function changeContent(task, part, change) {
        return task[part] = change;
    }
    
    return {
        createTasks,
        changeContent
    }
})


export const taskHandler = handleTasks()
