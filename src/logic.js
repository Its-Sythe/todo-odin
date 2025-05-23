const taskManager = (function() {
    const allTasks = [];
    function createTask(title, desc, due, priority) {
        return {
            title, desc, due, priority
        }
    }


    return {
        allTasks,
        createTask
    }
})();

const projectManager = (function() {
    const allProjects = [];
    function createProject(name) {
        const project = {
            projectName: name,
            projectTasks: []
        };
        if (allProjects.length != 0) {
            for (let p = 0; p < allProjects.length; p++) {
                if (allProjects[p].projectName != name) {
                    allProjects.push(project);
                    return;
                } else {
                    return `${name} already exists`
                }
            }
        }
        allProjects.push(project);
        return project;
    }

    function addTask(task, project) {
        if (allProjects.includes(project)) {
            if (!project.projectTasks.includes(task)) {
                project.projectTasks.push(task);
                return;
            } else {
                return `${task.title} already exists in ${project.projectName}`
            }
        } else if (!allProjects.includes(project)) {
            return `${project.projectName} not found`;
        }
    }

    return {
        allProjects,
        createProject,
        addTask
    }
})();

const defaultProject = projectManager.createProject("Default");
const duplicateDefault = projectManager.createProject("Default");
const newProject = projectManager.createProject("Hello");

const newTask = taskManager.createTask("Hello", "Hello", "2025-05-20", "No");
console.log(projectManager.allProjects)
taskManager.allTasks.push(newTask)
projectManager.addTask(newTask, defaultProject)


export { taskManager, projectManager }