const handleProjects = (function() {
    function createProject(name) {
        return {
            name, "projectTasks": []
        }
    }

    function addTask(project, ...task) {
        const tasks = project.projectTasks;
        
        if (task.length != 0) {
            if (tasks.length != 0) {
                for (let i = 0; i < tasks.length; i++) {
                    for (let j = 0; j < task.length; j++) {
                        if (tasks[i].title != task[j].title) {
                            return tasks.push(task[j]);
                        } else {
                            return `${task[j].title} already exists`
                        }
                    }   
                }
            } else {
                for (let m = 0; m < task.length; m++) {
                   tasks.push(task[m]);
                }
                return tasks
            }
        } 

        return tasks.push(task[0])
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
        addTask,
        deleteTask
    }
})

export const projectManager = handleProjects();