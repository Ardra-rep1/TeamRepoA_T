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
            id: this.currentId++,
            name: tName,
            dueDate: tDueDate,
            assignedTo: tAssignedTo,
            description: tDescription,
            status: 'TO DO'

        };
        /* for(let this. in task){
           if(task[key.value]!==null && task[key.value]!= ""){ */
            this.tasks.push(task);
           //}
       // }
    
    }

}

