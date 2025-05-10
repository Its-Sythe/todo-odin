const contentSpace = document.querySelector("content");

function addTask(task) {
    const taskDiv = document.createElement("div");
    const taskTitle = document.createElement("p");
    const taskDesc = document.createElement("p");
    taskDiv.id = "taskCard";

    taskTitle.textContent = task.title;
    taskDesc.textContent = task.desc;
}