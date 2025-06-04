// This will handle the creation of projects
// And their manipulation

let allProjects = [
    {
        name: 'Not Default',
        tasks: []
    }
];

function createProject(name) {
    let project = {
        name,
        tasks: []
    };

    const projectProto = Object.getPrototypeOf(project);

    projectProto.addTask = function(task) {
        if (project.tasks.length != 0) {
            if (project.tasks.some(tasks => tasks.title !== task.title)) {
                project.tasks.push(task);
                task.project = project.name;
                return project;
            } else {
                return 'O_o Wut?'
            }
        }
        project.tasks.push(task);
        task.project = project.name;
        return project;
    }

    projectProto.deleteTask = function(task) {
        if (project.tasks.some(tasks => tasks.title === task.title)) {
            project.tasks.splice(project.tasks.indexOf(task), 1);
            return project;
        } else {
            return 'O_o wut?'
        }
    }

    projectProto.editProject = function(change) {
        return project.name = change;
    }
    
    projectProto.deleteProject = function(project) {
        if (allProjects.some(projects => projects.name === project.name)) {
            allProjects.splice(allProjects.indexOf(project), 1);
            return allProjects;
        } else {
            return 'O_o'
        }
    }

    if (allProjects.length != 0) {
        if (allProjects.some(projects => projects.name !== project.name)) {
            allProjects.push(project);
            return project;
        } else {
            return false;
        }
    }
    allProjects.push(project);
    return project;
}

export { allProjects, createProject }