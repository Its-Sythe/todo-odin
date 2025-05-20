const taskManager = (function(){
    function createTask(title, desc, due, priority) {
        return {
            title, desc, due, priority
        }
    }

    function changePriority(task, newPriority) {
        return task.priority = newPriority;
    }

    return {
        createTask,
        changePriority
    }
})();

export { taskManager }