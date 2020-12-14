const newtaskForm = document.querySelector('#formId');
const msgDisplay = document.querySelector('#alertmessage');
msgDisplay.style.display = 'none';

      
// function for the description validation 
    
    function count_up(obj){
        document.getElementById('count1').innerHTML= obj.value.length;

    }
  newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskName = document.querySelector("#newTaskName");
    const taskDescription = document.querySelector("#newTaskDescription");
    const taskAssignedTo = document.querySelector('#assinedTo');
    const taskStatus = document.querySelector('#status');
    const taskDueDate = document.querySelector('#taskDuedate');
   
    
    validateInputs(taskName);
    validateInputs(taskDueDate);
    validateInputs(taskAssignedTo);
    validateInputs(taskStatus);
    validateInputs(taskDescription);
    

   
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
    

}

}   

 