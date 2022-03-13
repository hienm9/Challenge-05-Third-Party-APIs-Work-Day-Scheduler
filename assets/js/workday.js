// display the date time, format from moment js library
let currentDay = moment();
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));


function checkTime() {
    let currentHour = (new Date()).getHours();
    console.log(currentHour);

    const colorCode = document.getElementsByClassName("time-block");
debugger;

    $(colorCode).each(function(){
        let val = parseInt($(this).prop('id'));
        if(val < currentHour){
            $(this).css('background-color','Gray');
        }else if(val === currentHour){
            $(this).css('background-color','Red');
        }else{
            $(this).css('background-color','Green');
        }
    
    });
}
checkTime();

// add a class to the text area, depend on past, present, future.
// display the code.
// convert the time to 24 hrs format,
// compare to the past, present, future

//save task to local storage when click on the save button

    // let saveTasks = function() {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    //   };


$(".saveBtn").click(function() {    
    let value = $(this).siblings("textarea").val();
    localStorage.setItem('myVal', value);
})

const savedVal = localStorage.getItem('myVal')
$(this).siblings("textarea").val(savedVal);

  

// psuedo code

// display all of the blocks 
// display each bock with a business hour from 8  - 5
// display the current time at the top

// on the time blocks, display gray for time that is passed.
// write a function that compare the block time to the current time
    // then display correct color, gray for past, red for present, green for future

// make the blocks clickable
// function to allow user to enter an event on the block
// save the information to local storage when click on the Save button