// Initializing a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);

const newtaskForm = document.querySelector("#formId");
const msgDisplay = document.querySelector("#alertmessage");
msgDisplay.style.display = "none";

const taskName = document.querySelector("#newTaskName");
const taskDescription = document.querySelector("#newTaskDescription");
const taskAssignedTo = document.querySelector("#assignedTo");
const taskStatus = document.querySelector("#status");
const taskDueDate = document.querySelector("#taskDueDate");

function count_up(obj) {
  document.getElementById("count1").innerHTML = obj.value.length;
}

// Event handler to listen the submit event from the newwtask html page
newtaskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  msgDisplay.innerHTML = "";

  let vnc = validateInputs(taskName);
  let vddc = validateInputs(taskDueDate);
  let vac = validateInputs(taskAssignedTo);
  let vsc = validateInputs(taskStatus);
  let vdc = validateInputs(taskDescription);

  let taskFilterResult = taskFilterPush(vnc, vddc, vac, vdc);

  if (!(taskFilterResult == false)) {
    msgDisplay.style.display = "none";
    taskInputRefresh(taskName, taskDescription, taskAssignedTo, taskDueDate);
    taskManager.render();
  }
});

// function to check the data for empty string and null value and return false if it is

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
function taskFilterPush(vnc, vddc, vac, vdc) {
  if (
    !(vnc == false) &&
    !(vddc == false) &&
    !(vac == false) &&
    !(vdc == false)
  ) {
    taskManager.addTask(
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
}

// Function declaration to event handle the  delete  button click  for removing the object from the array and re-render the array list

const clickHandler = (e) => {

  const indexOfItem = taskManager.getTaskIndex(e.target.parentElement.parentElement.parentElement.parentElement.id);
 
  if (e.target.matches(".delete-button")) {
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.id);
    taskManager.getDelete(indexOfItem);
    taskManager.render();
  }

  if(e.target.matches(".done-button")){
    
    // const targetParent = e.target.parentElement.parentElement.parentElement.parentElement;
    // console.log(targetParent);
    // barElement = targetParent.children[0].children[1].children[3].children[0];
    // barElement.id = `barid${targetParent.id}`;

    // console.log(barElement);
    // console.log(barElement.id);
    // //console.log(e.target.parentElement.previousElementSibling.children[indexOfItem]);
    // //const barElement = e.target.parentElement.previousElementSibling.children[0];
    // taskManager.setStatusBar(barElement.id, "DONE")
      taskManager.setStatusForDone(indexOfItem);
     
      
     // taskManager.render();
  }
};

//Function declaration to event handle the Mark as done click to change the status 



// Selecting the parent element of the list
const deleteItem = document.querySelector("#taskDisplayList");

// Adding event listener to the parent element which grab any event on the children by event delegation
deleteItem.addEventListener("click", clickHandler);


// Adding event handler for status change 

// const statusChange = document.querySelector('#status');

// const statusChangeHandler = (e) => {

//     taskManager.setStatusBar(e.target.value);

// };

// statusChange.addEventListener('change',statusChangeHandler);



