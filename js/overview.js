// variables that will be used in code
var saveBtn = $('.saveBtn');
var notiBox = $('.notification-box');

// this below is the array of sets of array.. 
var setOfTimeSchedules = [];
function createSetsOfArray () {
for(var i=1; i <= 100; i++) {
    setOfTimeSchedules['testing' + i] = [];
}};
createSetsOfArray();
console.log(setOfTimeSchedules);
console.log("hello")


// Real Code is Below
// $(document).ready(function () {
//     saveBtn.on('click', function () {
//         var value = $(this).siblings('.description').val();
//         var startingTime = $(this).siblings('.startingTime').val();
//         var endingTime = $(this).siblings('.endingTime').val();
        
//     localStorage.setItem(value, startingTime, endingTime); 

    
//     })
// })
// Real Code is Above

//Testing Code is Below////////////////////////////////////////////////////////////////////////////////////////////////




// .button-save < save button
// .time-starting < starting time.$
// .time-ending < ending time
// .description-schedule < description of the schedule
// .date-selected < date 

// .status-todo < routine. priority. urgent
// .description-todo < descirpiont what to do 
// .due-time < 
// .due-date < 