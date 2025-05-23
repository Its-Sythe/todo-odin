let allTasks = [];
let allProjects = []

const taskManager = (function() {
    function createTask(title, due, priority) {
        const newTask = {
            title, due, priority
        }
        if (allTasks.length > 0) {
            const result = allTasks.filter((task) => task.title == newTask.title);
            if (result.length == 0) {
                allTasks.push(newTask);
                return newTask;
            } else {
                return `${newTask.title} already exists`
            }
        }
        allTasks.push(newTask)
        return newTask;
    }

    function editTask(task, context, change) {
        if (allTasks.includes(task)) {
            return task[context] = change;
        } else if (!allTasks.includes(task)) {
            return `${task.title} does not exist`
        }
    }

    function markComplete(task) {
        if (task['complete']) {
            return task['complete'] = 'Off'
        }
        return task['complete'] = 'On';
    }
    return {
        createTask,
        editTask,
        markComplete
    }
})();

const projectManager = (function() {
    function createProject(name) {
        let project = {
            name: "",
            tasks: []
        }
        if (!allProjects.includes(project)) {
            project.name = name;
            allProjects.push(project)
            return project;
        } else {
            return `${name} already exists`;
        }
    }

    function addTask(project, task) {
        if (allProjects.includes(project)) {
            if (!project.tasks.includes(task)) {
                project.tasks.push(task);
                return;
            } else {
                return `${task.title} already exists in ${project.name}`;
            }
        }
    }
    
    function deleteTask(task) {
        if (allTasks.includes(task)) {
            allTasks.splice(allTasks.indexOf(task), 1);
            for (let p = 0; p < allProjects.length; p++) {
                if (allProjects[p].tasks[p].title == task.title) {
                    allProjects[p].tasks.splice(allProjects.indexOf(allProjects[p]), 1);
                }
            }
        }
    }

    return {
        createProject,
        addTask,
        deleteTask
    }
})();

export { allTasks, allProjects, taskManager, projectManager }