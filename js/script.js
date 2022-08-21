////////////////// Main Page ////////////////////

var timeDisplayEL = document.getElementById('time-display');
var noww = moment();
var currentTimeMain = noww.format('hh:mm:ssA');
timeDisplayEL.textContent = currentTimeMain

const dateDisplayEl = document.getElementById('date-display');
var currentDateMain = noww.format('dddd, MMMM Do YYYY');
dateDisplayEl.textContent = currentDateMain

setInterval(() => {
    var noww = moment();
    var currentTimeMain = noww.format('hh:mm:ssA');
    timeDisplayEL.textContent = currentTimeMain;
    var currentDateMain = noww.format('dddd, MMMM Do YYYY');
    dateDisplayEl.textContent = currentDateMain;
}, 1000);

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 4000);
}

function showPage() {
    $('#gif').attr("style", "display:none;")
    $('#myDiv').attr("style", "display:block;")
    $('.main-body').removeClass('background-blue');
}


//////////////////// Date Picker ////////////////////
  $(function () {
    $('.datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
      });
    });

////////////////// Weather ////////////////////
var userLoco = document.querySelector('#location');
var temp = document.querySelector('#today-temp');
var weatherStats = document.querySelector('#today-status');
var feelsLike = document.querySelector('#feels-like');
var tempLow = document.querySelector('#today-lowest');
var tempHigh = document.querySelector('#today-highest');

document.addEventListener("DOMContentLoaded", function() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                console.log(lat, lon);
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&metric&appid=2dec71e39f0495733603e3c8490344e7&units=imperial`)
                .then(Response => Response.json())
                .then(data => {
                    console.log(data);
                    renderItem(data, position);
                })})
    }
})

function renderItem(data) {
    var tempValue = data['main']['temp'];
    var locationValue = data['name'];
    var lowTemp = data['main']['temp_min'];
    var highTemp = data['main']['temp_max'];
    var weatherStatus = data['weather']['0']['main'];
    var tempFeels = data['main']['feels_like'];
    userLoco.textContent = `Location: ${locationValue}`;
    temp.textContent = `Current Temp: ${tempValue} °F`;
    feelsLike.textContent = `Feels like: ${tempFeels} °F`;
    tempLow.textContent = `Today's Low: ${lowTemp} °F`;
    tempHigh.textContent = `Today's High: ${highTemp} °F`;
    weatherStats.textContent = `Current Weather: ${weatherStatus} `;
}


//////////////////// Schedule ////////////////////
//////////////////// Using Moment JS ////////////////////
var today = moment();
var currentDate = today.format("YYYY-MM-DD");
$(document).ready(function() {
    $('#today-date').text(today.format("dddd, MMMM D, YYYY"));
})
// $('#select-date-box').attr('value', today.format("MM/DD/YYYY"))
var currentDayOfWeek = today.format("dddd");
var daySunday = $('#week-sunday');
var dayMonday = $('#week-monday');
var dayTuesday = $('#week-tuesday');
var dayWednesday = $('#week-wednesday');
var dayThursday = $('#week-thursday');
var dayFriday = $('#week-friday');
var daySaturday = $('#week-saturday');

findDayOfWeek();
function findDayOfWeek() {
    if (currentDayOfWeek == "Sunday") {
        console.log("Sunday");
        daySunday.addClass('darkgrey');
        daySunday.text(today.format("D"))
        dayMonday.text(today.add(1, 'd').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Monday") {
        console.log("Monday");
        dayMonday.addClass('darkgrey');
        daySunday.text(today.subtract(1, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Tuesday") {
        console.log("Tuesday");
        dayTuesday.addClass('darkgrey');
        daySunday.text(today.subtract(2, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Wednesday") {
        console.log("Wednesday");
        dayWednesday.addClass('darkgrey');
        daySunday.text(today.subtract(3, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Thursday") {
        console.log("Thursday");
        dayThursday.addClass('darkgrey');
        daySunday.text(today.subtract(4, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Friday") {
        console.log("Friday");
        dayFriday.addClass('darkgrey');
        daySunday.text(today.subtract(5, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else if (currentDayOfWeek == "Saturday") {
        console.log("Saturday");
        daySaturday.addClass('darkgrey');
        daySunday.text(today.subtract(6, 'd').format("D"));
        dayMonday.text(today.add(1,'d').format("D"));
        dayTuesday.text(today.add(1, 'd').format("D"));
        dayWednesday.text(today.add(1, 'd').format("D"));
        dayThursday.text(today.add(1, 'd').format("D"));
        dayFriday.text(today.add(1, 'd').format("D"));
        daySaturday.text(today.add(1, 'd').format("D"));
    } else {
        console.log("getting error");
    }
}
var selectedDateInputEl = $('#select-date-box');
var selectedDateFormEl = $('#select-date-form');
console.log(selectedDateInputEl.val());

function handleSelectDate () {
    var selectedDate = selectedDateInputEl.val();
    $('#today-date').text(moment(selectedDate).format("dddd, MMMM D, YYYY"));
    currentDate = selectedDate;
    renderLocalStorage();
    renderTask();

}
$('#button-select-date').click(function() {
    handleSelectDate();
    
})
// selectedDateFormEl.on('select', '.button-select', handleSelectDate());

//////////////////// Schedules ////////////////////

// $('#week-sunday').text(moment().format("D"));

// whole container of the schedule box
var scheduleContainerEl = $('#schedule-container');
// variable declared for input details
var scheduleDateInputEl = $('#dates-schedule');
var editDateInputEl = $('#dates-schedule-edit');
var graceDateInputEl = $('#dates-scheduleG')

var startingTimeInputEl = $('#starting-time');
var graceStartingTimeInputEl = $('#starting-timeG');
var editStartingTimeInputEl = $('#starting-time-edit');

var endingTimeInputEl = $('#ending-time');
var graceEndingTimeInputEl = $('#ending-timeG');
var editEndingTimeInputEl = $('#ending-time-edit');

var descriptionScheduleInputEl = $('#description-schedule');
var graceDescriptionScheduleInputEl = $('#description-scheduleG');
var editDescriptionInputEl = $('#description-schedule-edit');

var submitBtnEl = $('#button-submit');
var graceSubmitBtnEl = $('#button-submitG');

var scheduleFormEl = $('#project-form');
var graceScheduleFormEl = $('#project-formG');
var editFormEl = $('#project-form-edit');

var scheduleListForAppend = [];


function renderLocalStorage() {
    scheduleContainerEl.empty();
    console.log(scheduleListForAppend);
    if (typeof scheduleListForAppend.length == "undefined") {
        for (var i = 0; i < 1; i++) {
            // console.log(scheduleListForAppend.startingTime);
    console.log("undefined: i will become 1");
            var dateParsed = scheduleListForAppend.dates;
            var startTimeParsed = scheduleListForAppend.startingTime;
            var endTimeParsed = scheduleListForAppend.endingTime;
            var schedulesParsed = scheduleListForAppend.schedules;
            
            // printSchedule(dateParsed, startTimeParsed, endTimeParsed, schedulesParsed);
            var scheduleRowEl = $('<div>');
            var timeBoxEl = $('<div>');
                var startTimeEl = $('<h6>');
                var lineBetween = $('<hr>');
                var endTimeEl = $('<h6>');
            var descriptionBoxEl = $('<div>');
                var descSchedule = $('<h5>');
            var editBtn = $('<button>');
            var cancelBtn = $('<button>');
            // console.log(dueDate);
            
    
        scheduleRowEl.addClass('row-test');
            timeBoxEl.addClass('time-container');
                startTimeEl.addClass('starting-time');
                endTimeEl.addClass('ending-time');
            descriptionBoxEl.addClass('description-container');
            editBtn.addClass('button-edit');
            cancelBtn.addClass('button-cancel');
    
                startTimeEl.text(startTimeParsed);
                endTimeEl.text(endTimeParsed);
                descSchedule.text(schedulesParsed);
                editBtn.text("edit");
                cancelBtn.text("cancel");
    
        scheduleRowEl.attr('data-dates', dateParsed);
        scheduleRowEl.attr('data-index', i);
        editBtn.attr('data-open', 'exampleModall-edit')
            // console.log("printing?");
            
            timeBoxEl.append(startTimeEl);
            timeBoxEl.append(lineBetween);
            timeBoxEl.append(endTimeEl);
    
            descriptionBoxEl.append(descSchedule);
    
        scheduleRowEl.append(timeBoxEl);
        scheduleRowEl.append(descriptionBoxEl);
        scheduleRowEl.append(editBtn);
        scheduleRowEl.append(cancelBtn);
    
        scheduleContainerEl.append(scheduleRowEl);
        }
    } else {
        for (var i = 0; i < scheduleListForAppend.length; i++) {
            scheduleListForAppend.sort((a, b) => a.timeStamp - b.timeStamp);
            
            if (scheduleListForAppend[i].dates !== currentDate) {
                console.log("skip!");
                console.log(scheduleListForAppend[i].dates)
            } else {
                
                var dateParsed = scheduleListForAppend[i].dates
                var startTimeParsed = scheduleListForAppend[i].startingTime;
                var endTimeParsed = scheduleListForAppend[i].endingTime;
                var schedulesParsed = scheduleListForAppend[i].schedules;
                
                // printSchedule(dateParsed, startTimeParsed, endTimeParsed, schedulesParsed);
                var scheduleRowEl = $('<div>');
                var timeBoxEl = $('<div>');
                    var startTimeEl = $('<h6>');
                    var lineBetween = $('<hr>');
                    var endTimeEl = $('<h6>');
                var descriptionBoxEl = $('<div>');
                    var descSchedule = $('<h5>');
                var editBtn = $('<button>');
                var cancelBtn = $('<button>');
                
                
        
            scheduleRowEl.addClass('row-test');
                timeBoxEl.addClass('time-container');
                    startTimeEl.addClass('starting-time');
                    endTimeEl.addClass('ending-time');
                descriptionBoxEl.addClass('description-container');
                editBtn.addClass('button-edit');
                cancelBtn.addClass('button-cancel');
        
                    startTimeEl.text(startTimeParsed);
                    endTimeEl.text(endTimeParsed);
                    descSchedule.text(schedulesParsed);
                    editBtn.text("edit");
                    cancelBtn.text("cancel");
        
            scheduleRowEl.attr('data-dates', dateParsed);
            scheduleRowEl.attr('data-index', i);
                editBtn.attr('data-open', 'exampleModall-edit')
                
                
                timeBoxEl.append(startTimeEl);
                timeBoxEl.append(lineBetween);
                timeBoxEl.append(endTimeEl);
        
                descriptionBoxEl.append(descSchedule);
        
            scheduleRowEl.append(timeBoxEl);
            scheduleRowEl.append(descriptionBoxEl);
            scheduleRowEl.append(editBtn);
            scheduleRowEl.append(cancelBtn);
        
            scheduleContainerEl.append(scheduleRowEl);
            }


}};
}
function init() {
    var storedSchedulesInit = JSON.parse(localStorage.getItem("scheduleList"));

    if (storedSchedulesInit !== null) {
        var storedSchedules = storedSchedulesInit;
        scheduleListForAppend = storedSchedules;
    }


    renderLocalStorage();
}
function saveToLocalStorage() {
   
    localStorage.setItem("scheduleList", JSON.stringify(scheduleListForAppend));

}
function handleScheduleFormSubmit(event) {
    event.preventDefault();
    var scheduleDate = scheduleDateInputEl.val();
    var scheduleStartTime = startingTimeInputEl.val();
    var scheduleEndTime = endingTimeInputEl.val();
    var scheduleDescription = descriptionScheduleInputEl.val();
    var timeStamp24 = moment(scheduleDate + scheduleStartTime, "YYYY-MM-DD h:mmA").format("X");
    console.log(timeStamp24)
    // return when description is empty
    if (scheduleDescription === "") {
        return;
    } else if (scheduleDate === "") {
        return;
    }

    var scheduleItem = {
        dates: scheduleDate,
        startingTime: scheduleStartTime,
        endingTime: scheduleEndTime,
        schedules: scheduleDescription,
        timeStamp: timeStamp24
    };

    if (scheduleListForAppend.length === 0) {
        scheduleListForAppend = scheduleItem;
        console.log("empty")
    } else if (typeof scheduleListForAppend.length == "undefined") {
        scheduleListForAppend = [scheduleListForAppend]
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    } else {
        console.log("third time?")
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    }

    
    // endingTime: scheduleEndTime, schedules: scheduleDescription});
    scheduleFormEl[0].reset();
    // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
    saveToLocalStorage();
    renderLocalStorage();
    
    

}

function handleDeleteSchedule(event) {
    var btnClicked = $(event.target);
    btnClicked.parent('div').remove();
    var index = btnClicked.parent('div').attr('data-index');
    scheduleListForAppend.splice(index, 1);

    saveToLocalStorage();
    renderLocalStorage();
}

function handleEditSchedule(event) {
    var editDate = $('#dates-schedule-edit');
    var editStartTime = $('#starting-time-edit');
    var editEndingTime = $('#ending-time-edit');
    var editDescription = $('#description-schedule-edit')

    var btnClicked = $(event.target);
    var clickedIndex = btnClicked.parent('div').attr('data-index');
    
    if (typeof scheduleListForAppend.length == "undefined") {
        scheduleListForAppend = [scheduleListForAppend];
        var clickedDate = scheduleListForAppend[clickedIndex].dates;
        var clickedStartTime = scheduleListForAppend[clickedIndex].startingTime;
        var clickedEndTime = scheduleListForAppend[clickedIndex].endingTime;
        var clickedDescription = scheduleListForAppend[clickedIndex].schedules;
    } 

    var clickedDate = scheduleListForAppend[clickedIndex].dates;
        var clickedStartTime = scheduleListForAppend[clickedIndex].startingTime;
        var clickedEndTime = scheduleListForAppend[clickedIndex].endingTime;
        var clickedDescription = scheduleListForAppend[clickedIndex].schedules;
    
    var selectedStartTime = editStartTime.find(`:contains(${clickedStartTime})`);
    var selectedEndTime = editEndingTime.find(`:contains(${clickedEndTime})`);


    editDate.attr('value', clickedDate);
    selectedStartTime.attr('selected', '');
    selectedEndTime.attr('selected', '');
    editDescription.attr('placeholder', clickedDescription);
    
    editFormEl.on('submit', handleScheduleFormEdit);

    function handleScheduleFormEdit(event) {
        // event.preventDefault();
    
        var scheduleDate = editDateInputEl.val();
        var scheduleStartTime = editStartingTimeInputEl.val();
        var scheduleEndTime = editEndingTimeInputEl.val();
        var scheduleDescription = editDescriptionInputEl.val();
        var timeStamp24 = moment(scheduleDate + scheduleStartTime, "YYYY-MM-DD h:mmA").format("X");
        console.log(scheduleDate + " " + scheduleStartTime)
        // return when description is empty
        if (scheduleDescription === "") {
            return;
        }
    
        var scheduleItem = {
            dates: scheduleDate,
            startingTime: scheduleStartTime,
            endingTime: scheduleEndTime,
            schedules: scheduleDescription,
            timeStamp: timeStamp24
        };
    
        if (scheduleListForAppend.length === 0) {
            scheduleListForAppend = scheduleItem;
            console.log("empty")
        } else if (typeof scheduleListForAppend.length == "undefined") {
            scheduleListForAppend = [scheduleListForAppend]
            scheduleListForAppend.push(scheduleItem);
            console.log(scheduleListForAppend);
        } else {
            console.log("third time?")
            scheduleListForAppend.push(scheduleItem);
            console.log(scheduleListForAppend);
        }
    
    scheduleListForAppend.splice(clickedIndex, 1);
        
        // endingTime: scheduleEndTime, schedules: scheduleDescription});
        scheduleFormEl[0].reset();
        // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
        saveToLocalStorage();
        renderLocalStorage();
    }
}

scheduleFormEl.on('submit', handleScheduleFormSubmit);
graceScheduleFormEl.on('submit', graceHandleScheduleFormSubmit);

scheduleContainerEl.on('click', '.button-cancel', handleDeleteSchedule);
scheduleContainerEl.on('click', '.button-edit', handleEditSchedule);
init();

////////////////////////////// GRACE SCHEDULE //////////////////////////////
function graceHandleScheduleFormSubmit(event) {
    event.preventDefault();
console.log("testing submit button")

    var scheduleDate = graceDateInputEl.val();
        // scheduleDate = moment(scheduleDate, 'MM-DD-YYYY').format('YYYY-MM-DD');
    var scheduleStartTime = graceStartingTimeInputEl.val();
    var scheduleEndTime = graceEndingTimeInputEl.val();
    var scheduleDescription = graceDescriptionScheduleInputEl.val();
    var timeStamp24 = moment(scheduleDate + scheduleStartTime, "MM-DD-YYYY h:mmA").format("X");
    console.log(scheduleDate + " " + scheduleStartTime)
    // return when description is empty
    if (scheduleDescription === "") {
        return;
    }

    var scheduleItem = {
        dates: scheduleDate,
        startingTime: scheduleStartTime,
        endingTime: scheduleEndTime,
        schedules: scheduleDescription,
        timeStamp: timeStamp24
    };

    if (scheduleListForAppend.length === 0) {
        scheduleListForAppend = scheduleItem;
        console.log("empty")
    } else if (typeof scheduleListForAppend.length == "undefined") {
        scheduleListForAppend = [scheduleListForAppend]
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    } else {
        console.log("third time?")
        scheduleListForAppend.push(scheduleItem);
        console.log(scheduleListForAppend);
    }

    
    // endingTime: scheduleEndTime, schedules: scheduleDescription});
    graceScheduleFormEl[0].reset();
    // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
    saveToLocalStorage();
    renderLocalStorage();
    
    

}

///////////////////////   TASK ////////////////////////////////////////
var taskContainerEl = $('#task-container');

var taskDateInputEl = $('#dates-task');
var graceTaskDateInputEl = $('dates-taskGT');

var taskStatusInputEl = $('#task-status');
var graceTaskStatusInputEl = $('#task-statusGT');

var taskDueDateInputEl = $('#due-time');
var graceDueDateInputEl = $('#due-timeGT');

var taskDescrInputEl = $('#description-task');
var graceDecriptionTaskInputEl = $('#description-taskGT');

var taskSubmitBtnEl = $('#button-submit-task');
var graceTaskSubmitBtnEl = $('#button-submitGT');

var taskFormEl = $('#task-form');
var graceTaskFormEl = $('#task-formGT');

var taskListMain = [];
function taskTimer() {
    console.log("taskTimer function");
    $('.task-row').each(function(index)  {
        console.log(index+ ": " + $(this).text() );
        var timeLeftPerIndex = $(this).text();
        var taskTimerInterval = setInterval(function () {
            if (timeLeftPerIndex > 0) {
            var d = Math.floor(timeLeftPerIndex / (3600*24));
            var h = Math.floor(timeLeftPerIndex % (3600*24) / 3600);
            var m = Math.floor(timeLeftPerIndex % 3600 / 60);
            var s = Math.floor(timeLeftPerIndex % 60);
            
            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";
            $('#task-container').children().eq(index).children('.time-left').text(timeLeftText);
            timeLeftPerIndex--;
            } else {
                clearInterval(taskTimerInterval);
            }
        }, 1000)
        
    })
}
function renderTask() {
    taskContainerEl.empty();
    var currentTime = moment().format("X");
    
    if (typeof taskListMain.length == "undefined") {
        for (var i = 0; i < 1; i++) {
            var taskDateParsed = taskListMain.dates;
            
            var taskDueDateParsed = taskListMain.dueDate;
            var taskDescriptionParsed = taskListMain.description;
            var taskStatusParsed = taskListMain.status;
            var taskTimeStamp = taskListMain.timestamp;
            var timeLeftFromNow = taskTimeStamp - currentTime;
            console.log(timeLeftFromNow);
            var d = Math.floor(timeLeftFromNow / (3600*24));
            var h = Math.floor(timeLeftFromNow % (3600*24) / 3600);
            var m = Math.floor(timeLeftFromNow % 3600 / 60);
            var s = Math.floor(timeLeftFromNow % 60);
            
            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";

            console.log(timeLeftText);

            var taskRowEl = $('<div>');
            
                var taskStatusEl = $('<div>');

                var taskDescription = $('<div>');

                var taskTimeLeft = $('<div>');

                var checkBtn = $('<button>');

                var timeLeftHidden = $('<div>');

if (taskListMain.status == "Routine") {
            taskStatusEl.addClass("green-routine");
            
}   else if (taskListMain.status == "Priority") {
            taskStatusEl.addClass("yellow-priority");
            
}   else if (taskListMain.status == "Urgent") {
            taskStatusEl.addClass("red-urgent")
            
} else {
    console.log("adding status error!!");
}

            taskRowEl.addClass('row-test task-container');
            taskStatusEl.addClass('task-status');
            taskDescription.addClass('task-description');
            taskTimeLeft.addClass('time-left');
            checkBtn.addClass('button-check');
            timeLeftHidden.addClass('task-row hide');

            taskStatusEl.text(taskStatusParsed);
            taskDescription.text(taskDescriptionParsed);
            taskTimeLeft.text(timeLeftText);
            checkBtn.text("Check");
            timeLeftHidden.text(timeLeftFromNow);

            taskRowEl.attr('data-dates', taskDateParsed);
            taskRowEl.attr('data-index', i); 

            taskRowEl.append(taskStatusEl);
            taskRowEl.append(taskDescription);
            taskRowEl.append(taskTimeLeft);
            taskRowEl.append(checkBtn);
            taskRowEl.append(timeLeftHidden);

            taskContainerEl.append(taskRowEl);
        }
    } else {
        for (var i=0; i < taskListMain.length; i++) {
            taskListMain.sort((a, b) => a.timeStamp - b.timeStamp);
            
            if (taskListMain[i].dates !== currentDate) {
                console.log("skip!");
            } else {
                
                var taskDateParsed = taskListMain[i].dates;
            
            var taskDueDateParsed = taskListMain[i].dueDate;
            var taskDescriptionParsed = taskListMain[i].description;
            var taskStatusParsed = taskListMain[i].status
            var taskTimeStamp = taskListMain[i].timeStamp;
            var timeLeftFromNow = taskTimeStamp - currentTime;
            
            /////
            var d = Math.floor(timeLeftFromNow / (3600*24));
            var h = Math.floor(timeLeftFromNow % (3600*24) / 3600);
            var m = Math.floor(timeLeftFromNow % 3600 / 60);
            var s = Math.floor(timeLeftFromNow % 60);
            
            var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";

            console.log(timeLeftText);
            /////

            var taskRowEl = $('<div>');
            
                var taskStatusEl = $('<div>');

                var taskDescription = $('<div>');

                var taskTimeLeft = $('<div>');

                var checkBtn = $('<button>');
                var timeLeftHidden = $('<div>');


          if (taskListMain[i].status == "Routine") {
                    taskStatusEl.addClass("green-routine");
                    
        }   else if (taskListMain[i].status == "Priority") {
                    taskStatusEl.addClass("yellow-priority");
                    
        }   else if (taskListMain[i].status == "Urgent") {
                    taskStatusEl.addClass("red-urgent")
                    
        } else {
            console.log("adding status error!!");
        }
            timeLeftHidden.addClass('task-row hide')

            taskRowEl.addClass('row-test task-container');
            taskStatusEl.addClass('task-status');
            taskDescription.addClass('task-description');
            taskTimeLeft.addClass('time-left');
            checkBtn.addClass('button-check');

            taskStatusEl.text(taskStatusParsed);
            taskDescription.text(taskDescriptionParsed);
            taskTimeLeft.text(timeLeftText);
            checkBtn.text("Check");
            timeLeftHidden.text(timeLeftFromNow);

            taskRowEl.attr('data-dates', taskDateParsed);
            taskRowEl.attr('data-index', i); 

            taskRowEl.append(taskStatusEl);
            taskRowEl.append(taskDescription);
            taskRowEl.append(taskTimeLeft);
            taskRowEl.append(checkBtn);
            taskRowEl.append(timeLeftHidden);

            taskContainerEl.append(taskRowEl);
            console.log(timeLeftFromNow);
            taskTimer();
            // var timeleftInterval = setInterval(function () {
            //     if (timeLeftFromNow > 0) {
            // var d = Math.floor(timeLeftFromNow / (3600*24));
            // var h = Math.floor(timeLeftFromNow % (3600*24) / 3600);
            // var m = Math.floor(timeLeftFromNow % 3600 / 60);
            // var s = Math.floor(timeLeftFromNow % 60);
            
            // var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
            // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
            // var mDisplay = m > 0 ? m + (m == 1 ? "minute, " : " minutes, ") : "";
            // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
            // var timeLeftText = dDisplay + hDisplay + mDisplay + sDisplay + " left!";
            //         taskTimeLeft.text(timeLeftText);
            //         timeLeftFromNow--;
            //     } else {
            //         //clear the row
            //         // and alert modal
            //         clearInterval(timeleftInterval);
            //     }
                
            // }, 1000);
            }
        }
    }
}

function initTask() {
    var storedTaskInit = JSON.parse(localStorage.getItem("taskList"));

    if (storedTaskInit !== null) {
        var storedTask = storedTaskInit;
        taskListMain = storedTask; 
    }
    renderTask();
}

function saveTaskToStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskListMain));
}

function handleTaskFormSubmit(event) {
    event.preventDefault();

    var taskDate = taskDateInputEl.val();
    var taskDueDate = taskDueDateInputEl.val();
    var taskDescription = taskDescrInputEl.val();
    var taskStatus = taskStatusInputEl.val();
    var timeStamp24 = moment(taskDate + taskDueDate, "YYYY-MM-DD h:mmA").format("X");
    console.log(taskDate + " " + taskDueDate)

    if (taskDescription === "") {
        return;
    } else if (taskDate === "") {
        return;
    }

    var taskItem = {
        dates: taskDate,
        status: taskStatus,
        description: taskDescription,
        dueDate: taskDueDate,
        timeStamp: timeStamp24
    }; 

    if (taskListMain.length === 0) {
        taskListMain = taskItem;
        console.log("empty")
    } else if (typeof taskListMain.length == "undefined") {
        taskListMain = [taskListMain]
        taskListMain.push(taskItem);
        console.log(taskListMain)
    } else {
        console.log("third task?")
        taskListMain.push(taskItem);
        console.log(taskListMain);
    }

    taskFormEl[0].reset();

    saveTaskToStorage();
    renderTask();

}

function handleDeleteTask(event) {
    var btnClicked = $(event.target);
    btnClicked.parent('div').remove();
    var index = btnClicked.parent('div').attr('data-index');
    taskListMain.splice(index, 1);

    saveTaskToStorage();
    renderTask();
}

taskFormEl.on('submit', handleTaskFormSubmit);
graceTaskFormEl.on('submit', graceHandleTaskFormSubmit);

taskContainerEl.on('click', '.button-check', handleDeleteTask);
initTask();

///////////////////////  GRACE TASK ////////////////////////////////////////
function graceHandleTaskFormSubmit(event) {
    //stop form from submitting -  not reload
    event.preventDefault();
console.log("testing task submit button")

var taskDate = graceTaskDateInputEl.val();
    taskDate = moment(taskDate, 'MM-DD-YYYY').format('YYYY-MM-DD');
var taskDueDate = graceDueDateInputEl.val();
var taskDescription = graceDecriptionTaskInputEl.val();
var taskStatus = graceTaskStatusInputEl.val();
var timeStamp24 = moment(taskDate + taskDueDate, "YYYY-MM-DD h:mmA").format("X");
console.log(taskDate + " " + taskDueDate)

if (taskDescription === "") {
    return;
}

var taskItem = {
    dates: taskDate,
    status: taskStatus,
    description: taskDescription,
    dueDate: taskDueDate,
    timeStamp: timeStamp24
};

if (taskListMain.length === 0) {
    taskListMain = taskItem;
    console.log("empty")
} else if (typeof taskListMain.length == "undefined") {
    taskListMain = [taskListMain]
    taskListMain.push(taskItem);
    console.log(taskListMain)
} else {
    console.log("third task?")
    taskListMain.push(taskItem);
    console.log(taskListMain);
}

graceTaskFormEl[0].reset();

saveTaskToStorage();
renderTask();
}