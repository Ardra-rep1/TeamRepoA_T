// TaskManager class
class TaskManager {

    // the tasks and currentId property in the constructor
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    // the addTask method
    addTask(tName, tAssignedTo, tDescription, tDueDate) {
        const task = {
            // the currentId property
            id: this.currentId++,
            name: tName,
            dueDate: tDueDate,
            assignedTo: tAssignedTo,
            description: tDescription,
            status: 'TO DO'

        };
        // Push the task to the tasks array
        this.tasks.push(task);
    }
}