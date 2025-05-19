import { getDiv, getButton } from "./mainUi";
import { allTasks } from "../logic/mainLogic";

const contentManager = (function() {
    const content = document.querySelector(".content");
    function createTaskCard(task) {
        const taskCard = getDiv();
        taskCard.id = "taskCard";

        const cardDetails = getDiv();
        cardDetails.id = "cardDetails";

        const cardTitle = document.createElement("p");
        cardTitle.id = "cardTitle";
        cardTitle.textContent = task.title;

        const cardDue = document.createElement("p");
        cardDue.id = "cardDue";
        cardDue.textContent = task.due;

        const cardEditBtns = getDiv();
        cardEditBtns.id = "cardEditBtns";

        const editTask = getButton();
        editTask.id = "editTask";
        editTask.textContent = "Edit";
        editTask.style.backgroundColor = "rgb(85, 216, 221)"

        const deleteTask = getButton();
        deleteTask.id = "deleteTask";
        deleteTask.textContent = "Delete"
        deleteTask.style.backgroundColor = "rgb(200, 50, 50)"

        cardEditBtns.append(editTask, deleteTask);
        cardDetails.append(cardTitle, cardDue)

        taskCard.append(cardDetails, cardEditBtns);
        return taskCard;
    }


    function dipslayAllTasks() {
        if (content.childNodes.length < allTasks.length) {
            for (let i = 0; i < allTasks.length; i++) {
                const newCard = contentManager.createTaskCard(allTasks[i]);
                content.append(newCard);
            }
        }
        return content;
    }   

    function addTodoBtn() {
        const addToDo = getButton();
        addToDo.id = "addToDoBtn";
        addToDo.textContent = "Add Task"

        content.append(addToDo);
    }

    addTodoBtn();

    return {
        createTaskCard,
        dipslayAllTasks
    }
})();

export { contentManager }