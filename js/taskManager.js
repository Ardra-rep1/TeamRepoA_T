class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  // the addTask method

  addTask(tName, tAssignedTo, tDescription, tDueDate, tStatus) {
    const task = {
      // the currentId property

      id: this.currentId++,
      name: tName,
      dueDate: tDueDate,
      assignedTo: tAssignedTo,
      description: tDescription,
      status: tStatus,
    };
    this.tasks.push(task);
  }

  // Function to return the index number of the object
  getTaskIndex(taskId) {
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id == taskId) {
        return i;
      }
    }
  }

  // Function to  remove the object from the tasks array

  getDelete(index) {
    this.tasks.splice(index, 1);
    if (this.tasks.length < 1) {
      document.location.reload(true);
    }
  }

  // Function to change the status for the Mark for done button

  setStatusForDone(objectIndex) {
    const objectSelect = this.tasks[objectIndex];
    objectSelect.status = "DONE";
    this.render();
  }

  setProgressBar(progressBarId, statusInput) {
    console.log(progressBarId);
    console.log(statusInput);

    const progressBarIdTimeout = progressBarId;
    const statusTimeout = statusInput;
    setTimeout(() => {
      console.log(progressBarIdTimeout);
      console.log(statusTimeout);

      const progressBar = document.querySelector("#" + progressBarIdTimeout);

      if (statusTimeout == "TO DO") {
        progressBar.classList.remove("bg-success", "bg-warning", "bg-info");

        progressBar.classList.add("bg-danger");
        progressBar.style.width = "25%";
      }

      if (statusTimeout == "PROGRESS") {
        progressBar.classList.remove("bg-danger", "bg-success", "bg-info");

        progressBar.classList.add("bg-warning");
        progressBar.style.width = "50%";
      }

      if (statusTimeout == "REVIEW") {
        progressBar.classList.remove("bg-danger", "bg-success", "bg-warning");
        progressBar.classList.add("bg-info");
        progressBar.style.width = "70%";
      }

      if (statusTimeout == "DONE") {
        progressBar.classList.remove("bg-danger", "bg-info", "bg-warning");
        progressBar.classList.add("bg-success");
        progressBar.style.width = "100%";
      }
    }, 0);
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
    const newCardPlace = document.querySelector("#taskDisplayList");
    const cardCopy = document.querySelector("#newtaskCard");
    newCardPlace.classList.remove("hidden-list");
    newCardPlace.innerHTML = "";

    this.tasks.forEach((task) => {
      const dueDate = task.dueDate;
      const formattedDate = this.dueDateFormate(dueDate);
      const remainingDays = this.remainingDays(dueDate);
      const cardCopyClone = cardCopy.cloneNode(true);

      cardCopyClone.children[0].children[0].innerText = `Assignee:  ${task.assignedTo} `;
      //cardCopyClone.children[0].children[0].children[0].innerText = "I am in ";
     // console.log(cardCopyClone.children[0]).children[0];

      cardCopyClone.children[0].children[0].children[1];


      cardCopyClone.children[1].firstElementChild.innerText = `${task.name}`;
      cardCopyClone.children[1].children[1].innerText = `${task.description}`;
      cardCopyClone.children[1].children[2].innerText = `Status: ${task.status}`;

      const statusBarClone = cardCopyClone.children[1].children[3].children[0];

      statusBarClone.id = `statusbar${task.id}`;

      cardCopyClone.children[2].children[0].innerText = `Due Date: ${formattedDate} `;
      cardCopyClone.children[2].children[1].innerText = `Remaining Days: ${remainingDays}`;

      let newLi = document.createElement("li");
      newLi.appendChild(cardCopyClone);

      newLi.className = "list-inline-item col-9 ";
      newLi.id = task.id;

      this.setProgressBar(statusBarClone.id, task.status);
      newCardPlace.appendChild(newLi);
    });
  }
}
