// Sidebar will have a tab that will display all the existing tasks
// at a given point in time.

// It will also have all projects, and ability to add a new project
// which will be handled in the mainUi file

import { getDiv, getButton } from "./mainUi";

const sidebarContent = (function() {
    const sidebar = document.querySelector(".sidebar");

    const appTitle = document.createElement("p");
    appTitle.id = "appTitle";
    appTitle.textContent = "時 Toki";

    const navContainer = getDiv();
    navContainer.id = "navContainer";

    const allTasks = getButton();
    allTasks.id = "allTasksTab";
    allTasks.textContent = "My Tasks";

    const importantTasks = getButton();
    importantTasks.id = "importantTasks";
    importantTasks.textContent = "Important Tasks";

    const completedTasks = getButton();
    completedTasks.id = "completedTasks";
    completedTasks.textContent = "Completed Tasks";

    navContainer.append(allTasks, importantTasks, completedTasks);

    const projects = document.createElement("p");
    projects.id = "projectsTitle";
    projects.textContent = "Projects"

    const projectsContainer = getDiv();
    projectsContainer.id = "projectsContainer";
    
    const addProjectBtn = getButton();
    addProjectBtn.id = "addProjectBtn";
    addProjectBtn.textContent = "Add Project";

    projectsContainer.append(addProjectBtn);

    sidebar.append(appTitle, navContainer, projects, projectsContainer);
})();


export { sidebarContent }