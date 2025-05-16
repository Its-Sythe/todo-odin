const sidebarContainer = document.querySelector(".sidebar");

const navContainer = document.createElement("div");
navContainer.id = "nav";

const homeBtn = document.createElement("button");
homeBtn.id = "homeBtn"
homeBtn.textContent = "Home";

const addProject = document.createElement("button");
addProject.id = "projectBtn"
addProject.textContent = "Add A Project";

const addTask = document.createElement("button");
addTask.id = "taskBtn"
addTask.textContent = "Add A Task";

navContainer.append(homeBtn, addTask, addProject);

const projectsContainer = document.createElement("div");
projectsContainer.id = "allProjects";

const containerTitle = document.createElement("div");
containerTitle.textContent = "My Projects";
containerTitle.id = "projects";

projectsContainer.append(containerTitle);

sidebarContainer.append(navContainer, projectsContainer);