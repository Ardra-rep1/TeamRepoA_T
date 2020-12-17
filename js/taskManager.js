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

    //function to render the tasks array on the screen 

    render(){
        // query selecting the task display ul 
        const newCardPlace = document.querySelector('#taskDisplayList');
        const cardCopy = document.querySelector('#newtaskCard');
        newCardPlace.innerHTML = "";

        this.tasks.forEach(task => {
            
              const cardCopyClone = cardCopy.cloneNode(true);
              
               cardCopyClone.children[0].innerText =  `Assignee:  ${ task.assignedTo } `;

            
                cardCopyClone.children[1].firstElementChild.innerText = `Task Name:  ${task.name}`;
                cardCopyClone.children[1].children[1].innerText = `Task Discription:  ${task.description}`;

                cardCopyClone.children[2].innerText= `Due Date: ${task.dueDate}`;
                 let newLi = document.createElement('li');
                newLi.appendChild(cardCopyClone);
            newLi.className ='list-inline-item col-10';

                newCardPlace.appendChild(newLi);
            }
            
            )

    }
}

