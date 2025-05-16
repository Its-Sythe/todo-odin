const handleProjects = (function() {
    function createProject(name) {
        return {
            name, "projectTasks": []
        }
    }

    function deleteTask(title, project) {
        const tasks = project.projectTasks
        if (tasks.length != 0) {
            for (let i = 0; tasks.length; i++) {
                if (tasks[i].title == title) {
                    return tasks.splice(tasks[i], 1);
                } else {
                    return `${title} not found in project`
                }
            }
        }
    }

    return {
        createProject,
        deleteTask
    }
})

export const projectManager = handleProjects();