
// var checkedItems = document.getElementsByName('check');

// for(let i of checkedItems){

// }

// category difft color
var categorydiv = document.getElementsByClassName('task-category');
for(let i of categorydiv){
    var category = i.querySelector('p');
    if(category.innerHTML == "Personal"){
        i.style.backgroundColor = "purple";
    }
    if(category.innerHTML == "Work"){
        console.log(true);
        i.style.backgroundColor = "orange";
    }
    if(category.innerHTML == "School"){
        i.style.backgroundColor = "green";
    }
    if(category.innerHTML == "Other"){
        i.style.backgroundColor = "grey";
    }

}

// no deadline
var date = document.querySelectorAll('.task-date p');

for(let i of date){
    const dueDate = i.innerHTML;
    console.log(i.innerHTML);
    if(dueDate !== "No deadline"){
        
        var d = new Date(dueDate);
        var newDate = d.toDateString();
        console.log(newDate);
        i.innerHTML = newDate;
    }
   
    
    if(dueDate == ""){
        i.innerHTML = "No deadline";
    }
}
