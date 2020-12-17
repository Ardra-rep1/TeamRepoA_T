



// TaskManager class
class TaskManager {

    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }
    // the addTask method

    addTask(tName, tAssignedTo, tDescription, tDueDate) {
        const task = {
            // the currentId property

            name: tName,
            dueDate: tDueDate,
            assignedTo: tAssignedTo,
            description: tDescription,
            status: 'TO DO'

        };

        this.tasks.push(task);


    }

}

