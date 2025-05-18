// Will be using IIFE to create
// each function needed for the to do logic

// As per requirements, todos will be objects,
// will achieve it using a factory function.


// To keep it simple, each todo will have a title,
// a description, a due date and a priority as per the requirements.

// Priority will be a 3 stage type of priority that is
// preset to be lowest and can be set to low, medium and high
// with a different color for each priority level.

// As per requirements each to do should have a specific
// project that it can be found under and rendered when
// that project is being viewed by the user.

const taskManager = (function() {
    function createTask(title, description, due, priority="Low", project="Default") {
        return {
            title, description, due, priority, project
        };
    };

    function changePriority(task, priority) {
        return task.priority = priority;
    }

    function changeProject(task, project) {
        return task.project = project;
    }

    return {
        createTask,
        changePriority,
        changeProject
    };
})();

export { taskManager };