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
      status: "TO DO",
    };
    this.tasks.push(task);
  }

  // Function to passing the index number of the objet to the getDelete method
  getTaskId(taskId) {
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id == taskId) {
        console.log(i);
        this.getDelete(i);
      }
    }
  }

  // Function to  remove the object from the tasks array

  getDelete(itemIndex) {
    this.tasks.splice(itemIndex, 1);
    if (this.tasks.length < 1) {
      document.location.reload(true);
    }
  }

  // Function to formate the date

  dueDateFormate(dueDate) {
    const taskdueDate = new Date(dueDate);
    // Format date to be dd/mm/yyyy
    const formattedDate =
      taskdueDate.getDate() +
      "/" +
      (taskdueDate.getMonth() + 1) +
      "/" +
      taskdueDate.getFullYear();

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

    return `${dueDateDay - currentDateDay} Days ${
      dueDateMonth - currentDateMonth
    } Months ${dueDateYear - currentDateYear} Years Remaining`;
  }

  //function to render the tasks array on the screen

  render() {
    // query selecting the task display ul

    
    const newCardPlace = document.querySelector("#taskDisplayList");
    const cardCopy = document.querySelector("#newtaskCard");
    newCardPlace.classList.remove("hidden-list");
    newCardPlace.innerHTML = "";

    this.tasks.forEach((task) => {
      const dueDate = task.dueDate;
      const formattedDate = this.dueDateFormate(dueDate);
      const remainingDays = this.remainingDays(dueDate);
      const cardCopyClone = cardCopy.cloneNode(true);

      cardCopyClone.children[0].innerText = `Assignee:  ${task.assignedTo} `;

      cardCopyClone.children[1].firstElementChild.innerText = `${task.name}`;
      cardCopyClone.children[1].children[1].innerText = `${task.description}`;
      cardCopyClone.children[1].children[2].innerText = `Status: ${task.status}`;
      cardCopyClone.children[1].children[4].children[0].id = task.id;

      cardCopyClone.children[2].children[0].innerText = `Due Date: ${formattedDate} `;
      cardCopyClone.children[2].children[1].innerText = `Remaining Days: ${remainingDays}`;

      let newLi = document.createElement("li");
      newLi.appendChild(cardCopyClone);

      newLi.className = "list-inline-item col-9 ";

      newCardPlace.appendChild(newLi);
    });
  }
}
