import { projectManager } from "../logic/projects";
import { allTasks, allProjects } from "../logic/logic";
const content = document.querySelector(".content");

const contentManager = (function() {
    function displayAddBtn() {
        const addToDo = document.createElement("button");
        addToDo.id = "addTask";
        addToDo.textContent = "Add Task";

        content.append(addToDo);
    }

    function createTaskCard(task) {
        const taskCard = document.createElement("div");
        taskCard.id = "taskCard";

        const taskCardTitle = document.createElement("p");
        taskCardTitle.id = "cardTitle";
        taskCardTitle.textContent = task.title;

        const taskCardDesc = document.createElement("p");
        taskCardDesc.id = "cardDesc";
        taskCardDesc.textContent = task.desc;

        const taskCardDue = document.createElement("p");
        taskCardDue.id = "cardDue";
        taskCardDue.textContent = task.due;

        const taskCardPriority = document.createElement("p");
        taskCardPriority.id = "cardPriority";
        taskCardPriority.textContent = task.priority;

        const changeBtns = document.createElement("div");
        changeBtns.id = "changeBtns";

        const editBtn = document.createElement("button");
        editBtn.id = "editTask";
        editBtn.textContent = "Edit";

        const deleteBtn = document.createElement("button");
        deleteBtn.id = "deleteTask";
        deleteBtn.textContent = "Delete";

        changeBtns.append(editBtn, deleteBtn);

        taskCard.append(taskCardTitle, taskCardDue, changeBtns);
        return taskCard;
    }

    function displayAllTasks(tasks) {
        for (let t = 0; t < tasks.length; t++) {
            const newCard = createTaskCard(tasks[t]);
            content.append(newCard);
        }
    }



    return {
        displayAllTasks
    }
})()

export { contentManager }