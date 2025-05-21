import { allTasks } from "./logic";

const taskManager = (function(){
    function createTask(title, desc, due, priority) {
        return {
            title, desc, due, priority
        }
    }

    function editTask(task, type, change) {
        if (task[type]) {
            return task[type] = change;
        } else {
            return `${task[type]} does not exist`
        }
    }

    function completeTask(task) {
        if (allTasks.includes(task)) {
            if (task['complete'] == '' || task['complete'] == undefined) {
                return task['complete'] = 'Completed'
            } else if (task['complete'] == 'Completed') {
                return task['complete'] = 'Incomplete'
            }
            return task['complete'] = "Completed";
        }
    }

    return {
        createTask,
        editTask,
        completeTask
    }
})();

export { taskManager }