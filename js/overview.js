// variables that will be used in code
// var saveBtn = $('.saveBtn');
// var notiBox = $('.notification-box');

// this below is the array of sets of array.. 
// var setOfTimeSchedules = [];
// function createSetsOfArray () {
// for(var i=1; i <= 100; i++) {
//     setOfTimeSchedules['testing' + i] = [];
// }};
// createSetsOfArray();
// console.log(setOfTimeSchedules);
// console.log("hello")


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
// var value = 'descriptoin 1 for schedule'
// var startingTime = '9:00AM'
// var endingTime = '10:00AM'

// setOfTimeSchedules.push('schedule'+(setOfTimeSchedules.length + 1)) 

// console.log(setOfTimeSchedules)
// setOfTimeSchedules[setOfTimeSchedules.length].push("test")
// console.log(setOfTimeSchedule[0])

// var schedule1
// var schedule2


// .button-save < save button
// .time-starting < starting time.$
// .time-ending < ending time
// .description-schedule < description of the schedule
// .date-selected < date 

// .status-todo < routine. priority. urgent
// .description-todo < descirpiont what to do 
// .due-time < 
// .due-date < 

// whole container of the schedule box
var scheduleContainerEl = $('#schedule-container');
// variable declared for input details
var scheduleDateInputEl = $('#dates-schedule');
var startingTimeInputEl = $('#starting-time');
var endingTimeInputEl = $('#ending-time');
var descriptionScheduleInputEl = $('#description-schedule');

var submitBtnEl = $('#button-submit');

var scheduleFormEl = $('#project-form');
// .addClass('row-test');
function printSchedule(dueDate, start, end, description) {
    var scheduleRowEl = $('<div>');
        var timeBoxEl = $('<div>');
            var startTimeEl = $('<h6>');
            var lineBetween = $('<hr>');
            var endTimeEl = $('<h6>');
        var descriptionBoxEl = $('<div>');
            var descSchedule = $('<h5>');
        var editBtn = $('<button>');
        var cancelBtn = $('<button>');
        console.log(dueDate);
        

    scheduleRowEl.addClass('row-test');
        timeBoxEl.addClass('time-container');
            startTimeEl.addClass('starting-time');
            endTimeEl.addClass('ending-time');
        descriptionBoxEl.addClass('description-container');
        editBtn.addClass('button-edit');
        cancelBtn.addClass('button-cancel');

            startTimeEl.text(start);
            endTimeEl.text(end);
            descSchedule.text(description);
            editBtn.text("edit");
            cancelBtn.text("cancel");

    scheduleRowEl.attr('data-dates', dueDate);
        console.log("printing?");
        
        timeBoxEl.append(startTimeEl);
        timeBoxEl.append(lineBetween);
        timeBoxEl.append(endTimeEl);

        descriptionBoxEl.append(descSchedule);

    scheduleRowEl.append(timeBoxEl);
    scheduleRowEl.append(descriptionBoxEl);
    scheduleRowEl.append(editBtn);
    scheduleRowEl.append(cancelBtn);

    scheduleContainerEl.append(scheduleRowEl);

// need hide function after submitted    
console.log(scheduleContainerEl)
}
//handle delete schedule function
function handleDeleteSchedule(event) {
    var btnClicked = $(event.target);
    btnClicked.parent('div').remove();
}

// handle schedule form submission

function handleScheduleFormSubmit(event) {
    event.preventDefault();
console.log("submit!?")
    var scheduleDate = scheduleDateInputEl.val();
    var scheduleStartTime = startingTimeInputEl.val();
    var scheduleEndTime = endingTimeInputEl.val();
    var scheduleDescription = descriptionScheduleInputEl.val();

    printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);

    scheduleFormEl[0].reset();
console.log("submitted");
}
// submitBtnEl.on('click', function() {
//     handleScheduleFormSubmit;
//     console.log("submit");
// })
scheduleFormEl.on('submit', handleScheduleFormSubmit);
scheduleContainerEl.on('click', '.button-cancel', handleDeleteSchedule);


