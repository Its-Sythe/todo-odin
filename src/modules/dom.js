import { validator } from "./validate";

const addBtn = document.querySelector(".add-task");
addBtn.addEventListener(
    "click", () => {
        validator.handleTaskModalDisplay();
    }
)

const submitTaskBtn = document.getElementById("submit-task");
submitTaskBtn.addEventListener(
    "click", (event) => {
        event.preventDefault();
        validator.validateTaskForm();
        validator.handleTaskModalDisplay();
    }
)