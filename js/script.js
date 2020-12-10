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
// function for the description validation 

      function descriptionvalidate(data){
        if(data.trim()=="")
        {
           

            msgDisplay.style.display = 'block';
            msgDisplay.innerHTML = 'Task Description cant be empty';

        }
        else {
            msgDisplay.style.display ='none';
          }

    }  
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
        

    function count_up(obj){
        document.getElementById('count1').innerHTML= obj.value.length;

    }
  newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskName = document.querySelector("#newTaskName")
    const taskDescription = document.querySelector("#newTaskDescription");
    const taskDueDate = document.querySelector("#taskDueDate");
    
    const Name =  taskName.value;
    const Description = taskDescription.value;
    const Date = taskDueDate.value;

    nameValidation(Name);
    descriptionvalidate(Description);
   
})
 
/* newtaskForm.addEventListener('submit', (event) => {
    event.preventDefault();
   const nameValue = document.querySelector('#taskName').value;
    calling the checking for the name funciton 
    nameValidation(nameValue);
  })
 */