import { taskManager } from "./tasks";
import { projectManager } from "./projects";

export const allProjects = [
    {
        projectName: "Default",
        projectTasks: []
    }
];
export const allTasks = [
    {
        title: "A simple Task",
        desc: "A simple desc",
        due: "2025-05-20",
        priority: "Lowest"
    },
    {
        title: "Another simple one",
        desc: "Uhhh...",
        due: "2025-02-25",
        priority: "Lowest"
    }
];