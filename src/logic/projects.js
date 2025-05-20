const projectManager = (function() {
    function createProject(name) {
        const project = {
            projectName: name,
            projectTasks: []
        }

        return project
    }

    function deleteTask(task, project) {
        if (project.projectTasks.includes(task)) {
            project.projectTasks.splice(project.projectTasks.indexOf(task), 1);
        }
    }
    
    return {
        createProject,
        deleteTask
    }
})();


export { projectManager }