class TaskManager {
  constructor() {
    this.tasks = []; 
    this.currentId;
  }
  // the addTask method
  addTask(id, tName, tAssignedTo, tDescription, tDueDate, tStatus) {
    const task = {
      // the currentId property
      id,
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
      document.location.reload();
    }
  }

  
  // Function to return the object for the tasks array
  getTask(index) {
    return this.tasks[index];
  }
  // function to edit the task properties start
  setTaskName(editName, index) {
    this.tasks[index].name = editName;
    console.log(this.tasks[index].name);
  }
  setTaskDescription(editTaskDescription, index) {
    this.tasks[index].description = editTaskDescription;
    console.log(this.tasks[index].description);
  }
  setTaskAssignedTo(editAssignee, index) {
    this.tasks[index].assignedTo = editAssignee;
    console.log(editAssignee, index);
  }
  setTaskStatus(editStatus, index) {
    this.tasks[index].status = editStatus;
  }
  setTaskDueDate(editDate, index) {
    this.tasks[index].dueDate = editDate;
  }
  // function to edit the task properties end
  setStatusForDone(objectIndex) {
    const objectSelect = this.tasks[objectIndex];
    objectSelect.status = "DONE";
    this.render();
  }
  setProgressBar(progressBarId, statusInput) {
    //console.log(progressBarId);
    //console.log(statusInput);
    const progressBarIdTimeout = progressBarId;
    const statusTimeout = statusInput;
    setTimeout(() => {
      // console.log(progressBarIdTimeout);
      // console.log(statusTimeout);
      const progressBar = document.querySelector("#" + progressBarIdTimeout);
      if (statusTimeout == "TO DO") {
        // progressBar.classList.remove("bg-success", "bg-warning", "bg-info");
        //  progressBar.classList.add("bg-danger");
        progressBar.style.width = "30%";
        progressBar.innerHTML = "TASK TO DO";
      }
      if (statusTimeout == "PROGRESS") {
        // progressBar.classList.remove("bg-danger", "bg-success", "bg-info");
        //  progressBar.classList.add("bg-warning");
        progressBar.style.width = "50%";
        progressBar.innerHTML = "TASK IN PROGRESS";
      }
      if (statusTimeout == "REVIEW") {
        // progressBar.classList.remove("bg-danger", "bg-success", "bg-warning");
        //  progressBar.classList.add("bg-info");
        progressBar.style.width = "70%";
        progressBar.innerHTML = "TASK ON REVIEW";
      }
      if (statusTimeout == "DONE") {
        // progressBar.classList.remove("bg-danger", "bg-info", "bg-warning");
        // progressBar.classList.add("bg-success");
        progressBar.style.width = "100%";
        progressBar.innerHTML = "TASK IS DONE";
      }
    }, 0);
  }

  remainingDays(data) {
    const todaysDate = new Date();
    console.log(todaysDate);
    const dataValue = new Date(data);
    console.log(dataValue);
    const daysRemaining = dataValue.getTime() - todaysDate.getTime();

    const mins = Math.round(daysRemaining / 1000 / 60);
    const hours = Math.round(mins / 60);
    let days = Math.round(hours / 24);
    // console.log(days);
    days = (days == 1) ? days + " day" : days + " days";
    return days;
  }
  // Function to unload the local storage tasks previous task
  unloadCartStorage() {
    let oldTasks = [];
    oldTasks = JSON.parse(localStorage.getItem("cartStorage")) || [];
    this.loadTask(oldTasks);
    localStorage.removeItem("cartStorage");
    oldTasks = [];
  }

  setIdToTask() {
    if (localStorage.key("currentIdStore") == null) {
      localStorage.setItem("currentIdStore", JSON.stringify(0));
      return 0;
    } else {
      let nextId = Number(JSON.parse(localStorage.getItem("currentIdStore")));
      nextId++;

      localStorage.setItem("currentIdStore", JSON.stringify(nextId));
      return nextId;
    }
  }

  // Function to unload the local storage tasks previous task

  unloadCartStorage() {
    let oldTasks = [];
    oldTasks = JSON.parse(localStorage.getItem("cartStorage"));
    //localStorage.removeItem('cartStorage');
    this.loadTask(oldTasks);

    oldTasks = [];
  }

  // Function to push new tasks to oldTasks array

  loadTask(oldTasks) {
    oldTasks.forEach((task) => {
      this.tasks.push(task);
    });
  }

  //Function to save tasks to the local storage for tasks array

  setCartStorage() {
    localStorage.setItem("cartStorage", JSON.stringify(this.tasks));

    console.log(localStorage);
  }

  render() {
    const newCardPlace = document.querySelector("#taskDisplayList");
    const cardCopy = document.querySelector("#newtaskCard");
    newCardPlace.classList.remove("hidden-list");
    newCardPlace.innerHTML = "";
    this.setCartStorage();
    this.tasks.forEach((task) => {
      const dueDate = task.dueDate;
      // const formattedDate = this.dueDateFormate(dueDate);
      const remainingDays = this.remainingDays(dueDate);
      const cardCopyClone = cardCopy.cloneNode(true);
      cardCopyClone.children[0].children[0].innerText = `Assigned To:  ${task.assignedTo} `;
      cardCopyClone.children[0].children[1];
      cardCopyClone.children[1].firstElementChild.innerText = `${task.name}`;
      cardCopyClone.children[1].children[1].innerText = `${task.description}`;
      //cardCopyClone.children[1].children[2].innerText = `Status: ${task.status}`;
      const statusBarClone = cardCopyClone.children[1].children[3].children[0];
      statusBarClone.id = `statusbar${task.id}`;
      // cardCopyClone.children[2].children[0].innerText = `Due Date: ${formattedDate} `;
      cardCopyClone.children[2].children[0].innerText = `Task Due in ${remainingDays}`;
      let newLi = document.createElement("li");
      newLi.appendChild(cardCopyClone);
      newLi.className = "list-item col-lg-4";
      newLi.id = task.id;
      this.setProgressBar(statusBarClone.id, task.status);
      newCardPlace.appendChild(newLi);
    });
  }
}

module.exports = TaskManager;