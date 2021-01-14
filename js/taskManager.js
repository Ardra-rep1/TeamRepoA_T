
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
    this.tasks.push(task);

  }

  // delete the task
  deleteTask(taskId) {

    const newTasks = [];

    let j = 0;
    for (let i = 0; i < this.tasks.length; i++) {

      const task = this.tasks[i];
      if (task.id !== taskId) {
        //  task.id = j;
        newTasks.push(task);
        j++;
        //this.tasks.splice(taskId,1);
      }
    }


    this.tasks = newTasks;
  }



  getTaskId(taskId) {

    let foundTaskId;
    for (let i = 0; i < this.tasks.length; i++) {

      const task = this.tasks[i];

      if (task.id == taskId) {

        foundTaskId = task;
      }
    }

    return foundTaskId;
  }






  // Function to formate the date 


  dueDateFormate(dueDate) {
    const taskdueDate = new Date(dueDate);
    // Format date to be dd/mm/yyyy
    const formattedDate = taskdueDate.getDate() + '/' + (taskdueDate.getMonth() + 1) + '/' + taskdueDate.getFullYear();

    return formattedDate;
  }



  // function to return the remaining days 

  remainingDays(dueDate) {



    let currentDate = new Date();
    const currentDateDay = currentDate.getDate();
    const currentDateMonth = currentDate.getMonth() + 1;
    const currentDateYear = currentDate.getFullYear();
    // }

    // due Date data 

    const taskdueDate = new Date(dueDate);

    const dueDateDay = taskdueDate.getDate();
    const dueDateMonth = taskdueDate.getMonth() + 1;
    const dueDateYear = taskdueDate.getFullYear();


    return `${dueDateDay - currentDateDay} Days ${dueDateMonth - currentDateMonth} Months ${dueDateYear - currentDateYear} Years Remaining`;
  };

  //function to render the tasks array on the screen

  render() {
    // query selecting the task display ul
    const newCardPlace = document.querySelector("#taskDisplayList");
    const cardCopy = document.querySelector("#newtaskCard");
    newCardPlace.innerHTML = "";

    this.tasks.forEach((task) => {

      const dueDate = task.dueDate;
      const formattedDate = this.dueDateFormate(dueDate);
      const remainingDays = this.remainingDays(dueDate)
      const cardCopyClone = cardCopy.cloneNode(true);


      cardCopyClone.children[0].innerText = `Assignee:  ${task.assignedTo} `;


      cardCopyClone.children[1].firstElementChild.innerText = `${task.name}`;
      cardCopyClone.children[1].children[1].innerText = `${task.description}`;
      cardCopyClone.children[1].children[2].innerText = `Status: ${task.status}`;
      cardCopyClone.children[1].children[3].id = `${task.id}`;
      cardCopyClone.children[2].children[0].innerText = `Due Date: ${formattedDate} `;
      // cardCopyClone.children[2].children[1].innerText = `Remaining Days: ${remainingDays}`;


      let newLi = document.createElement("li");
      newLi.appendChild(cardCopyClone);
      newLi.className = "list-inline-item col-3 m-3";

      newCardPlace.appendChild(newLi);


    });
  }

  save() {
    if (localStorage.getItem('tasks')) {
      localStorage.removeItem('tasks');
    }
    const tasksJson = JSON.stringify(this.tasks);
    console.log(tasksJson);
    localStorage.setItem('tasks', tasksJson);

  }

  load() {
    const tasksload = localStorage.getItem('tasks');
    const tasksJson = JSON.parse(tasksload);

    tasksJson.map(eachTask => {
      const { name, assignedTo, description, dueDate } = eachTask;
      this.addTask(name, assignedTo, description, dueDate);
    });
   
  }
}

