const newtaskForm = document.querySelector('#formId');
const msgDisplay = document.querySelector('#alertmessage');
msgDisplay.style.display = 'none';

// function for the name validation 

function nameValidation(data) {
if (data.trim() == "") {
    msgDisplay.style.display ='block';
    msgDisplay.innerHTML = 'Task Name Cant Be Empty';
  } else if (isNaN(data) == false){
    msgDisplay.style.display = 'block';
    msgDisplay.innerHTML = 'Task Name Cannot Be Number ONLY!';
  }else {
    msgDisplay.style.display ='none';
  }
}

// function for the AssignTo validation 
    function AssigntoValidate(data){
        if(data == "" || data == null)
        {
            msgDisplay.style.display = 'block';
            msgDisplay.innerHTML = 'Please Assign a Person for the task';
        }
        else {
                msgDisplay.style.display ='none';
        }

    }

    // function for the status validation 
         function statusValidate(data){
             console.log(data);
        if(data == "" || data == null){
            msgDisplay.style.display = 'block';
            msgDisplay.innerHTML = 'Task status needs to be selected';
        } 
            // optional just for checking task for validation
        else{
            if(data == "TO DO")
            {
                msgDisplay.style.display = 'block';
                msgDisplay.innerHTML ='Task is initialised';
            }
            else if(data == "PROGRESS"){
                msgDisplay.style.display = 'block';
                msgDisplay.innerHTML ='We are working on that';
            }
            else if(data == "REVIEW"){
                msgDisplay.style.display = 'block';
                msgDisplay.innerHTML ='Task is on review';
           }
           else if(data == "DONE"){
            msgDisplay.style.display = 'block';
            msgDisplay.innerHTML ='Task is finished';
       }


        }
    } 
// function for the description validation 

        function descriptionValidate(data){
        if(data.trim()==""|| data == null)
        {
            msgDisplay.style.display = 'block';
            msgDisplay.innerHTML = 'Task Description cant be empty';
        }
        else {
                msgDisplay.style.display ='none';
        }

        }   
    
    function count_up(obj){
        document.getElementById('count1').innerHTML= obj.value.length;

    }
  newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskName = document.querySelector("#newTaskName").value;
    const taskDescription = document.querySelector("#newTaskDescription").value;
    const taskAssignedTo = document.querySelector('#assinedTo').value;
    const taskStatus = document.querySelector('#status').value;
    // date validation is done in html
    
    
    nameValidation(taskName);
    AssigntoValidate(taskAssignedTo);
    statusValidate(taskStatus);
    descriptionValidate(taskDescription);

   
});
 
