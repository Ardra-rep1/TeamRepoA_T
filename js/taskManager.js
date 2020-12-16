// TaskManager class to add the task into Array 
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

//Task Class to create a card to display added as a new task

function createNewTaskCard(){


    
}
<div class="card text-center">
    <div class="card-header">
        Featured
  </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
        2 days ago
  </div>
</div>