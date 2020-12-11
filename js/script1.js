const newtaskForm = document.querySelector('#formId');

const msgDisplay = document.querySelector('#alertmessage');
msgDisplay.style.display = 'none';
newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskName = document.querySelector("#newTaskName");
    const taskDescription = document.querySelector("#newTaskDescription");
    const taskAssignedTo = document.querySelector('#assinedTo');
    const taskStatus = document.querySelector('#status');

       const tName = taskName.value.trim();
       const tDescription =  taskDescription.value.trim();
       const tAssignedTo = taskAssignedTo.value;
       const tStatus = taskStatus.value;


    // date validation is done in html
    
    
    if (!validFormFieldInput(tName)){
        msgDisplay.style.display ='block';
        msgDisplay.innerHTML = 'Task Name Cant Be Empty';

    }
    else if(!isNaN(tName)){
        msgDisplay.style.display ='block';
        msgDisplay.innerHTML = 'Task Name Cant Be Empty';
    }
    else if(tAssignedTo == ""){
            msgDisplay.style.display = 'block';
            msgDisplay.innerHTML = 'Please Assign a Person for the task';
    }
    else if(tStatus=="")
    {
        msgDisplay.style.display = 'block';
        msgDisplay.innerHTML = 'Task status needs to be selected';
    }
    
    else if (!validFormFieldInput(tDescription))
    {
        msgDisplay.style.display = 'block';
        msgDisplay.innerHTML = 'Task Description cant be empty';
    }
    else {
        msgDisplay.style.display ='none';
}

            /* Task Status Validation */
if(tStatus == "TO DO")
    {
        msgDisplay.style.display = 'block';
        msgDisplay.innerHTML ='Task is initialised';
    }
     else if(tStatus == "PROGRESS"){
        msgDisplay.style.display = 'block';
        msgDisplay.innerHTML ='We are working on that';
    }
    else if(tStatus == "REVIEW"){
        msgDisplay.style.display = 'block';
        msgDisplay.innerHTML ='Task is on review';
   }
    else if(tStatus == "DONE"){
        msgDisplay.style.display = 'block';
        msgDisplay.innerHTML ='Task is Done';
    } 
 
});

function validFormFieldInput(data){
    return data !== null && data !== '';
}

function count_up(obj){
    document.getElementById('count1').innerHTML= obj.value.length;

}