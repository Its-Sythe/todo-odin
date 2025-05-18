// Each project will be a simple object with the projects name
// and the tasks found under that project. Will still use an IIFE
// to create everything related to the projects.

// Each project will have the ability to add a new task to itself
// and the ability to delete a project from itself and thus delete
// it entirely.

const projectManager = (function() {
    function createProject(name) {
        const project = {
            projectName: name,
            projectTasks: []
        }

        return project;
    }

    function deleteTask(project, task) {
        const tasks = project.projectTasks;
        if (tasks.includes(task)) {
            return tasks.splice(tasks.indexOf(task), 1);
        } else {
            return `${task.title} does not exist`;
        };
    }

    function deleteProject(projects, project) {
        if (projects.includes(project)) {
            return projects.splice(projects.indexOf(project), 1);
        } else {
            return `${project.projectName} not found`;
        };
    }

    return {
        createProject,
        deleteTask,
        deleteProject
    }

})();

export { projectManager }