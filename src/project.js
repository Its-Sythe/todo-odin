export const myProjects = [];

const handleProjects = (function() {
    function createProject(name) {
        const projectTasks = [];
        if (myProjects.length != 0) {
            for (const project in myProjects) {
                if (myProjects[project].name != name) {
                    myProjects.push( {name, projectTasks} );
                }
            }
            return { name, projectTasks }
        }
        myProjects.push( {name, projectTasks} );
        return { name, projectTasks};
    }

    function makeChange(project, type, change) {
        if (type == "name") {
            project.name = change;
        }
        if (type == "delete") {
            for (const _ in myProjects) {
                if (myProjects[_].name == project.name) {
                    myProjects.splice(myProjects.indexOf(myProjects[_]), 1);
                    return `${project.name} has been deleted!`
                }
            }
        }
    }

    return {
        createProject,
        makeChange
    }
})

export const projectHandler = handleProjects();
