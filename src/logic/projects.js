import { allProjects } from "./logic";

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
            return project.projectTasks.splice(project.projectTasks.indexOf(task), 1);
        } else {
            return `${task} does not exist`
        }
    }

    function deleteProject(project) {
        if (allProjects.includes(project)) {
            return allProjects.splice(allProjects.indexOf(project), 1);
        } else {
            return `${project} does not exist`
        }
    }

    function editProjectName(project, newName) {
        for (let p = 0; p < allProjects.length; p++) {
            if (allProjects[p].projectName != newName && allProjects.includes(project)) {
                return project.projectName = newName;
            } else if (allProjects[p].projectName == newName) {
                return `${newName} already exists`
            } else if (!allProjects.includes(project)) {
                return `${project.projectName} does not exist`
            }
        }
    }

    function addTask(task, project) {
        if (allProjects.includes(project)) {
            if (!project.projectTasks.includes(task)) {
                return project.projectTasks.push(task);
            } else if (project.projectTasks.includes(task)) {
                return `${task.title} already exists in ${project.projectName}`
            }
        } else if (!allProjects.includes(project)) {
            return `${project.projectName} does not exist`
        }
    }
    
    return {
        createProject,
        deleteTask,
        editProjectName,
        addTask,
        deleteProject
    }
})();


export { projectManager }