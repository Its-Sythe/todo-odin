const taskManager = (function() {
    const allTasks = [];
    class task {
        constructor(title, desc, due, priority) {
            this.title = title;
            this.desc = desc;
            this.due = due;
            this.priority = priority
        }
    }


    return {
        allTasks,
        task
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

const newTask = new taskManager.task("Hello", "Dead", "Eternal", "Low");
console.log(newTask)

export { taskManager, projectManager }