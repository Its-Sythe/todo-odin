import { projectManager } from "./logic";

const projectDisplayer = (function() {
    const allProjects = projectManager.allProjects
    function handleNewProject(name) {
        const projectNames = [];

        for (let p = 0; p < allProjects.length; p++) {
            projectNames.push(allProjects[p].projectName);
        }

        if (!projectNames.includes(name)) {
            const newProject = projectManager.createProject(name);
            return  newProject;
        }
    }

    return {
        handleNewProject
    }
})();