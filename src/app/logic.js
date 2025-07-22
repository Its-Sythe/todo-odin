export class Task {
    constructor(name, due, priority) {
        this.name = name;
        this.due = due;
        this.priority = priority;
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    containsTask(taskName) {
        return this.tasks.some(tasks => tasks.name == taskName)
    }

    addTask(task) {
        if(this.containsTask(task.name)) return

        this.tasks.push(task);
        return;
    }

    deleteTask(taskName) {
        if (!this.containsTask) return;

        let tgtTask = this.tasks.find(tasks => tasks.name == taskName);
        this.tasks.splice(this.tasks.indexOf(tgtTask), 1)
        console.log(this.tasks)
    }
}

export class Todo {
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
        this.projects.push(new Project("Today"));
        this.projects.push(new Project("Upcoming"));
    }

    addProject(project) {
        if (this.containsProject(project.name)) return;

        this.projects.push(project)
    }

    getProjects() {
        return this.projects;
    }

    containsProject(projectName) {
        return this.projects.some(projects => projects.name == projectName)
    }

    getDefaults() {
        return [this.projects[0], this.projects[1], this.projects[2]];
    }

    getProject(projectName) {
        if (!this.containsProject(projectName)) return;

        return this.projects.find(projects => projects.name == projectName)
    }
}

export class Storage {
    static loadToStorage(item) {
        localStorage.setItem("todo", JSON.stringify(item));
    }

    static loadFromStorage() {
        let content = JSON.parse(localStorage.getItem("todo"));
        if (content) {
            Object.setPrototypeOf(content, Object.getPrototypeOf(new Todo()));
            let projects = content.projects;
            for (let i = 0; i < projects.length; i++) {
                Object.setPrototypeOf(projects[i], Object.getPrototypeOf(new Project()));
                for (let j = 0; j < projects[i].tasks.length; j++) {
                    Object.setPrototypeOf(projects[i].tasks[j], Object.getPrototypeOf(new Task()));
                }
            }
            return content;
        }
    }
}
