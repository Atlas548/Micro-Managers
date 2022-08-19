//////////////////// Weather ////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var userLoco = document.querySelector('#location');
    var temp = document.querySelector('#today-temp');
    var status = document.querySelector('#today-status');
    var tempLow = document.querySelector('#today-lowest');
    var tempHigh = document.querySelector('#today-highest');
        function renderItem(data) {
            var tempValue = data['main']['temp'];
            var locationValue = data['name'];
            var lowTemp = data['main']['temp_min'];
            var highTemp = data['main']['temp_max'];
            var weatherStatus = data['weather']['0']['main'];
            userLoco.textContent = `Location: ${locationValue}`;
            temp.textContent = `Current Temp: ${tempValue} °F`;
            tempLow.textContent = `Today's Low: ${lowTemp} °F`;
            tempHigh.textContent = `Today's High: ${highTemp} °F`;
            status.textContent = `Current Weather: ${weatherStatus} `;
        }
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
                })
            })
        }
})


//////////////////// Schedule ////////////////////
//////////////////// Using Moment JS ////////////////////
var today = moment();
var currentDate = today.format("YYYY-MM-DD");
$('#today-date').text(today.format("dddd, MMMM D, YYYY"));
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


//////////////////// Rendering Schedules ////////////////////

// $('#week-sunday').text(moment().format("D"));

// whole container of the schedule box
var scheduleContainerEl = $('#schedule-container');
// variable declared for input details
var scheduleDateInputEl = $('#dates-schedule');
var editDateInputEl = $('#dates-schedule-edit');
var startingTimeInputEl = $('#starting-time');
var editStartingTimeInputEl = $('#starting-time-edit');
var endingTimeInputEl = $('#ending-time');
var editEndingTimeInputEl = $('#ending-time-edit');
var descriptionScheduleInputEl = $('#description-schedule');
var editDescriptionInputEl = $('#description-schedule-edit');

var submitBtnEl = $('#button-submit');

var scheduleFormEl = $('#project-form');
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
        event.preventDefault();
    
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
    console.log(clickedIndex);
    scheduleListForAppend.splice(clickedIndex, 1);
        
        // endingTime: scheduleEndTime, schedules: scheduleDescription});
        scheduleFormEl[0].reset();
        // printSchedule(scheduleDate, scheduleStartTime, scheduleEndTime, scheduleDescription);
        saveToLocalStorage();
        renderLocalStorage();
        
        
    
    }
}

scheduleFormEl.on('submit', handleScheduleFormSubmit);
scheduleContainerEl.on('click', '.button-cancel', handleDeleteSchedule);
scheduleContainerEl.on('click', '.button-edit', handleEditSchedule);
init();

//////////////////// To-Do-List ////////////////////
