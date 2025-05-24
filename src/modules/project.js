let allProjects = [];

function createProject(name) {
    let project = {
        name,
        tasks: []
    }

    project.editProject = function(newName) {
        if (!allProjects.some(projects => projects.name === newName)) {
            return project.name = newName
        }
    }

    project.addTask = function(task) {
        if (!project.tasks.some(existing => existing.title === task.title)) {
            return project.tasks.push(task);
        }
    }

    project.deleteTask = function(task) {
        if (project.tasks.some(existing => existing.title === task.title)) {
            const result = project.tasks.findIndex(el => el.title === task.title);
            return project.tasks.splice(result, 1);
        } else {
            return `${task.title} was never found`
        }
    }

   if (!allProjects.some(projects => projects.name === project.name)) {
        allProjects.push(project);
        return project;
   } else if (allProjects.some(projects => projects.name === project.name)) {
    return `${project.name} already exists`
   }
}

export { allProjects, createProject }