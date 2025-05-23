import { allTasks, taskManager } from "./logic";

const validator = (function() {
    function validateTaskForm() {
        const taskForm = document.forms['task-form'];
        const taskName = taskForm['task-name'].value;
        const taskDue = taskForm['task-due'].value;
        const taskPriority = taskForm['task-priority'].value;

        if (taskName != "" && taskDue != "" && taskPriority != "") {
            const result = taskManager.createTask(taskName, taskDue, taskPriority);
            console.log(typeof(result));
            if (typeof(result) == Object) {
                return true;
            }
        }
    }

    function handleTaskModalDisplay() {
        const result = validateTaskForm();
        const taskModal = document.querySelector(".task-modal");
        if (result == true) {
            if (taskModal.style.display == "") {
                return taskModal.style.display = "block";
            } else if (taskModal.style.display == "block") {
                return taskModal.style.display = "";
            }
        } else {
            taskModal.style.display = "block";
        }
    }

    return {
        validateTaskForm,
        handleTaskModalDisplay
    }
})();

export { validator }