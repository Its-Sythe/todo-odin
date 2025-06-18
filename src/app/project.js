// This will handle the creation of projects
// And their manipulation

import { storageManager } from "./storage";

export let allProjects = JSON.parse(localStorage.getItem("projects")) || [];

let project = {
    name: "",
    tasks: []
};
const projectProto = Object.getPrototypeOf(project);

projectProto.addTask = function(task) {
    if (project.tasks.length != 0) {
        if (project.tasks.some(tasks => tasks.title !== task.title)) {
            project.tasks.push(task);
            task.project = project.name;
            storageManager.saveProjects();
            return project;
        } else {
            return 'O_o Wut?'
        }
    }
    project.tasks.push(task);
    task.project = project.name;
    storageManager.saveProjects();
    console.log(project);
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

function createProject(name) {
    project = {
        name,
        tasks: []
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
    console.log(project);
    return project;
}

function fixLoadedProjects() {
    if(allProjects.length != 0) {
        for (let i = 0; i < allProjects.length; i++) {
            let loadedProject = Object.getPrototypeOf(allProjects[i]);
            Object.assign(loadedProject, projectProto)
        }
    }
}

export { createProject, fixLoadedProjects }