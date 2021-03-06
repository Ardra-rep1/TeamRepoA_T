// Initializing a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);
let xPosition;
let yPosition;



let editTaskIndex;
const newtaskForm = document.querySelector("#formId");
const msgDisplay = document.querySelector("#alertmessage");
msgDisplay.style.display = "none";
const editTaskError = document.querySelector("#editAlertmessage");
editTaskError.style.display = "none";
const taskName = document.querySelector("#newTaskName");
const taskDescription = document.querySelector("#newTaskDescription");
const taskAssignedTo = document.querySelector("#assignedTo");
const taskStatus = document.querySelector("#status");
const taskDueDate = document.querySelector("#taskDueDate");

// Event handler to listen the submit event from the newwtask html page
newtaskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  msgDisplay.innerHTML = "";
  let vnc = validateInputs(taskName);
  let vddc = validateInputs(taskDueDate);
  //let vdda = avoidPastDate(taskDueDate);
  let vac = validateInputs(taskAssignedTo);
  let vsc = validateInputs(taskStatus);
  let vdc = validateInputs(taskDescription);
  let taskFilterResult = taskFilterPush(vnc, vddc, vac, vdc, vsc);
  if (!(taskFilterResult == false)) {
    msgDisplay.style.display = "none";
    taskInputRefresh(taskName, taskDescription, taskAssignedTo, taskDueDate);
    location.reload();
    taskManager.render();
  }
});

//function to check the data for empty string and null value and return false if it is
function validateInputs(data) {
  let dataValue = data.value;
  let errorMsg;
  if (dataValue.trim() == "" || dataValue == null) {
    msgDisplay.style.display = "block";
    errorMsg = document.createElement("div");
    errorMsg.innerHTML = `${data.name.toUpperCase()} CANNOT BE EMPTY`;
    msgDisplay.appendChild(errorMsg);
    return false;
  }
}
// Function to add the task to the task array ( in taskManager js )
function taskFilterPush(vnc, vddc, vac, vdc, vdda, vsc) {
  if (
    !(vnc == false) &&
    !(vddc == false) &&
    !(vac == false) &&
    !(vdc == false) &&
    !(vdda == false) &&
    !(vsc == false)
  ) {
    let id = taskManager.setIdToTask();
    taskManager.addTask(
      id,
      taskName.value,
      taskAssignedTo.value,
      taskDescription.value,
      taskDueDate.value,
      taskStatus.value
    );
  } else {
    return false;
  }
}
// Function to clear the input field after the submit button is pressed
function taskInputRefresh(
  taskName,
  taskDescription,
  taskAssignedTo,
  taskDueDate
) {
  taskName.value = "";
  taskDescription.value = "";
  taskAssignedTo.value = "";
  taskDueDate.value = "";
  taskStatus.value = "";
}
// Function declaration to event handle for the card icons
const clickHandler = (e) => {
  const indexOfItem = taskManager.getTaskIndex(
    e.target.parentElement.parentElement.parentElement.parentElement.id
  );
  if (e.target.matches(".delete-button")) {
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement.id
    );
    taskManager.getDelete(indexOfItem);
    taskManager.render();
  }
  if (e.target.matches(".done-button")) {
    taskManager.setStatusForDone(indexOfItem);
  }
  if (e.target.matches(".edit-button")) {
    editTaskIndex = indexOfItem;
    let returnTask = taskManager.getTask(indexOfItem);
    console.log(returnTask);
    const taskName = document.querySelector("#editTaskName");

    const taskDescription = document.querySelector("#editTaskDescription");
    const taskAssignedTo = document.querySelector("#editAssignedTo");
    const taskStatus = document.querySelector("#editStatus");
    const taskDueDate = document.querySelector("#editTaskDueDate");

    taskName.value = returnTask.name;
    taskDescription.value = returnTask.description;
    taskAssignedTo.value = returnTask.assignedTo;
    taskStatus.value = returnTask.status;
    taskDueDate.value = returnTask.dueDate;
  }
};

const btnDelete = document.querySelector(".btnDelete");
btnDelete.addEventListener("click", () => {
  if (taskManager.tasks.length < 1) {
    const btnDelete = document.querySelector(".btnDelete");
    btnDelete.removeAttribute("data-target", "#deleteAllTasksModal");
    btnDelete.setAttribute("data-target", "#modalError");
  } else {
    const btnDelete = document.querySelector(".btnDelete");
    btnDelete.removeAttribute("data-target", "#modalError");
    btnDelete.setAttribute("data-target", "#deleteAllTasksModal");
  }
});

const clearTaskBtn = document.querySelector(".clearTaskBtn");
clearTaskBtn.addEventListener("click", () => {
  taskManager.clearTasks();
  taskManager.render();
});

//Function declaration to event handle the Mark as done click to change the status
// Selecting the parent element of the list
const deleteItem = document.querySelector("#taskDisplayList");
// Adding event listener to the parent element which grab any event on the children by event delegation
deleteItem.addEventListener("click", clickHandler);
// Adding event handler to the edit submit button
const editSubmitButton = document.querySelector("#edit-submit");
editSubmitButton.addEventListener("click", () => {
  // console.log(`I am inside edit submit button`);
  const taskName = document.querySelector("#editTaskName");
  const taskDescription = document.querySelector("#editTaskDescription");
  const taskAssignedTo = document.querySelector("#editAssignedTo");
  const taskStatus = document.querySelector("#editStatus");
  const taskDueDate = document.querySelector("#editTaskDueDate");

  // function to validate edit task details

  const editTaskError = document.querySelector("#editAlertmessage");
  editTaskError.style.display = "none";
  editTaskError.innerHTML = "";
  let vnc = validateTaskInput(taskName);
  let vddc = validateTaskInput(taskDueDate);
  //let vdda = avoidPastDateEdit(taskDueDate);
  let vac = validateTaskInput(taskAssignedTo);
  let vsc = validateTaskInput(taskStatus);
  let vdc = validateTaskInput(taskDescription);

  if (
    !(vnc == false) &&
    !(vddc == false) &&
    !(vac == false) &&
    !(vdc == false) &&
    //  !(vdda == false) &&
    !(vsc == false)
  ) {
    console.log(taskManager.setTaskName(taskName.value, editTaskIndex));
    taskManager.setTaskDescription(taskDescription.value, editTaskIndex);
    taskManager.setTaskAssignedTo(taskAssignedTo.value, editTaskIndex);
    taskManager.setTaskStatus(taskStatus.value, editTaskIndex);
    console.log(taskManager.setTaskDueDate(taskDueDate.value, editTaskIndex));
    editTaskError.style.display = "none";
    location.reload();
    taskManager.render();
  }
});

function validateTaskInput(data) {
  let dataValue = data.value;
  let errorMsg1;
  if (dataValue.trim() == "" || dataValue == null) {
    editTaskError.style.display = "block";
    errorMsg1 = document.createElement("div");
    errorMsg1.innerHTML = `${data.name.toUpperCase()} CANNOT BE EMPTY`;
    editTaskError.appendChild(errorMsg1);
    return false;
  }
}



window.addEventListener("load", () => {
  taskManager.unloadCartStorage();

  // taskManager.setCartStorage();
  taskManager.render();
});


//Function to deactivate the past date

 function deactivateDate() {
  let today = new Date().toISOString().split("T")[0];

  document.querySelector("#taskDueDate").setAttribute("min", today);
  document.querySelector("#editTaskDueDate").setAttribute("min", today);
}
deactivateDate(); 

//Funtion to create a dragable button

const movingElement = document.querySelector(".addTaskBtn");

movingElement.addEventListener("mousedown", mousedown);

function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevX = e.clientX;
  let preY = e.clientY;

  function mousemove(e) {

      document.querySelector(".addTaskBtn").removeAttribute("data-toggle", "modal");
  
    let newX = prevX - e.clientX;
    let newY = preY - e.clientY;

    const rect = movingElement.getBoundingClientRect();

    //   let adjustRectLeft = rect.left ;
    //   let adjustRectTop = rect.top  ;

    movingElement.style.left = rect.left - newX + "px";
    movingElement.style.top = rect.top - newY + "px";

    console.log(movingElement.style.left);
    console.log(movingElement.style.top);

    prevX = e.clientX;
    preY = e.clientY;
  }

  function mouseup() {
    window.removeEventListener("mousedown", mousedown);
    window.removeEventListener("mousemove", mousemove);

   setTimeout(()=>{
          document.querySelector(".addTaskBtn").setAttribute("data-toggle", "modal");
   },0);

   
}
}

// Function for search 
document.querySelector(".search-task").addEventListener("keyup",(event) =>{
   
 // if( event.keyCode == 13){
    //location.reload();
    
    let searchTaskArray = [];
    
      // console.log(event.target.value);
      let taskIds=  taskManager.findTask(event.target.value);
      //console.log(taskId);
    

      taskIds.forEach((taskId) => {

        let taskIndex = taskManager.getTaskIndex(taskId);
        let searchedTask = taskManager.getTask(taskIndex);

        searchTaskArray.push(searchedTask);

      })
        
        taskManager.setSearch(searchTaskArray);
        taskManager.render('search');
    
       
    

     
  // }

  
})

