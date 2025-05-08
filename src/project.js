const allProjects = []
const handleProjects = (function() {

    function createProject(name) {
        const allTasks = []
        if (allProjects.length != 0) {
            for (const project in allProjects) {
                if (allProjects[project].name != name) {
                    allProjects.push({name, allTasks})
                } else {
                    return `${name} project already exists!`
                }
            }
        }

        allProjects.push({name, allTasks})
        return {
            name, allTasks
        }
    }

    function deleteProject(project) {
        if(allProjects.includes(project)) {
            allProjects.splice(allProjects.indexOf(project), 1);
        } else {
            return `${project} not found in projects`
        }
    }

    return {
        createProject,
        deleteProject
    }
})

const projectHandler = handleProjects();

export { projectHandler, allProjects }