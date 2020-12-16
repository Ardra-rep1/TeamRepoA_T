
// Initializing a new TaskManager with currentId set to 0
const taskManager = new TaskManager(0);


const newtaskForm = document.querySelector('#formId');
const msgDisplay = document.querySelector('#alertmessage');
msgDisplay.style.display = 'none';

      
    function count_up(obj){
        document.getElementById('count1').innerHTML= obj.value.length;

    }
  newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();



    const taskName = document.querySelector("#newTaskName");
    const taskDescription = document.querySelector("#newTaskDescription");
    const taskAssignedTo = document.querySelector('#assignedTo');
    const taskStatus = document.querySelector('#status');
    const taskDueDate = document.querySelector('#taskDueDate');

    

    msgDisplay.innerHTML = '';
    
    validateInputs(taskName);
    validateInputs(taskDueDate);
    validateInputs(taskAssignedTo);
    validateInputs(taskStatus);
    validateInputs(taskDescription);


    validInputCheck(data);
    
    
    // Clear the form
    taskName.value = '';
    taskDescription.value = '';
    taskAssignedTo.value = '';
    taskDueDate.value = '';

    

   
});


function validateInputs(data){
    let dataValue = data.value;
    let errorMsg;

if(dataValue.trim()== ""|| dataValue == null)
{
    msgDisplay.style.display = 'block';
    errorMsg = document.createElement('div');

    errorMsg.innerHTML= `${data.name.toUpperCase()} cant be empty`;
    msgDisplay.appendChild(errorMsg);
   

    return false;
}

}  
let flag = validateInputs(data);
function validInputCheck(flag){
    if(!flag)
    {
        const taskName = document.querySelector("#newTaskName");
        const taskDescription = document.querySelector("#newTaskDescription");
        const taskAssignedTo = document.querySelector('#assignedTo');
        const taskStatus = document.querySelector('#status');
        const taskDueDate = document.querySelector('#taskDueDate');
    // Add the task to the task manager
        taskManager.addTask(taskName.value,taskAssignedTo.value,taskDescription.value,taskDueDate.value);
    }
}

   
    

}
else 
{
    msgDisplay.style.display = 'none';
}

}   


 