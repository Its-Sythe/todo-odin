// This will handle the creation of projects
// And their manipulation

import { storageManager } from "./storage";

let savedProjects = JSON.parse(localStorage.getItem("projects"));

let allProjects = [];

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
   
    if (savedProjects) {
        for (let i = 0; i < savedProjects.length; i++) {
            if (!allProjects.some(projects => projects.name !== savedProjects[i].name)) {
                allProjects.push(savedProjects[i]);
                console.log(allProjects);
            }
        }
    }

    console.log(allProjects);

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

export { allProjects, createProject }
