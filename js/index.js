
// Initializing a new TaskManager with currentId set to 0
let taskManager = new TaskManager(0);


taskManager.load();
taskManager.render();

const newtaskForm = document.querySelector('#formId');
const msgDisplay = document.querySelector('#alertmessage');
msgDisplay.style.display = 'none';

const taskName = document.querySelector("#newTaskName");
const taskDescription = document.querySelector("#newTaskDescription");
const taskAssignedTo = document.querySelector('#assignedTo');
const taskStatus = document.querySelector('#status');
const taskDueDate = document.querySelector('#taskDueDate');


function count_up(obj) {
    document.getElementById('count1').innerHTML = obj.value.length;

}

// Event handler to listen the submit event from the newwtask html page 
newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    msgDisplay.innerHTML = '';


    let vnc = validateInputs(taskName);
    let vddc = validateInputs(taskDueDate);
    let vac = validateInputs(taskAssignedTo);
    validateInputs(taskStatus);
    let vdc = validateInputs(taskDescription);

    let taskFilterResult = taskFilterPush(vnc, vddc, vac, vdc);

    if (!(taskFilterResult == false)) {

        msgDisplay.style.display = 'none';
        taskInputRefresh(taskName, taskDescription, taskAssignedTo, taskDueDate);
        taskManager.render();
        taskManager.save();
    }

});


// function to check the data for empty string and null value and return false if it is 

function validateInputs(data) {
    let dataValue = data.value;
    let errorMsg;

    if (dataValue.trim() == "" || dataValue == null) {
        msgDisplay.style.display = 'block';
        errorMsg = document.createElement('div');
        errorMsg.innerHTML = `${data.name.toUpperCase()} CANNOT BE EMPTY`;
        msgDisplay.appendChild(errorMsg);
        return false;
    }
}

// Function to add the task to the task array ( in taskManager js )
function taskFilterPush(vnc, vddc, vac, vdc) {

    if (!(vnc == false) && !(vddc == false) && !(vac == false) && !(vdc == false)) {
        taskManager.addTask(taskName.value, taskAssignedTo.value, taskDescription.value, taskDueDate.value);
    } else {
        return false;
    }

}



// Function to clear the input field after the submit button is pressed 


function taskInputRefresh(taskName, taskDescription, taskAssignedTo, taskDueDate) {
    taskName.value = '';
    taskDescription.value = '';
    taskAssignedTo.value = '';
    taskDueDate.value = '';
}

const tasksList = document.querySelector('#taskDisplayList');
tasksList.addEventListener('click', (ev) => {
    ev.preventDefault();

    if (ev.target.classList.contains('done-button')) {

        const parentTask = ev.target.parentElement;


        // console.log(parentTask);


        const taskId = Number(parentTask.id);
        //   console.log(taskId); correct up to this point


        const task = taskManager.getTaskId(taskId);

        /// console.log(task);

        //console.log(task);
        task.status = 'DONE';
        taskManager.save();


        taskManager.render();
    }
    if (ev.target.classList.contains('delete-button')) {


        const parentTask = ev.target.parentElement;

        const taskId = Number(parentTask.id);
        console.log(taskId);
        // Delete the task

        taskManager.deleteTask(taskId);

        // Save the tasks to localStorage
        taskManager.save();

        // Render the tasks
        taskManager.render();
    }
});



//priority & git 
// Past dates fix the past date
//showing only remaining days.
// we will focus on the styling later.

// notification/ popup  for the urgent task 
// improve the validation




