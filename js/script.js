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
           

            mgsDisplay.style.displap = 'block';
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
    event.PreventDefault();
    
    const taskName = document.querySelector("#newTask")
    const taskDescription = document.querySelector("#newTaskDescription");
    const taskDueDate = document.querySelector("#taskDueDate");
    
    const Name =  taskName.value;
    const Description = taskDescription.value;
    const Date = taskDueDate.value;

    event.nameValidation(Name);
    event.descriptionvalidate(Description);
    event.validatedate(Date);
});

// code for  date string validation  

/* function validatedate(Date){      
    let dateformat = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/;      
          
    // Match the date format through regular expression      
    if(Date.match(dateformat)){      
        let operator = dateString.split('/');      
      
        // Extract the string into month, date and year      
        let datepart = [];      
        if (operator.length>1){      
            datepart = Date.split('/');      
        }      
        let month= parseInt(datepart[0]);      
        let day = parseInt(datepart[1]);      
        let year = parseInt(datepart[2]);      
              
        // Create list of days of a month      
        let ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];      
        if (month==1 || month>2){      
            if (day>ListofDays[month-1]){      
                ///This check is for Confirming that the date is not out of its range      
                return false;      
            }      
        }else if (month==2){      
            let leapYear = false;      
            if ( (!(year % 4) && year % 100) || !(year % 400)) {      
                leapYear = true;      
            }      
            if ((leapYear == false) && (day>=29)){      
                return false;      
            }else      
            if ((leapYear==true) && (day>29)){      
                console.log('Invalid date format!');      
                return false;      
            }      
        }      
    }else{      
        console.log("Invalid date format!");      
        return false;      
    }      
    return true;      
}    */


    

    
    



  
        
   
