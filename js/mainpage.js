// // For main page.

const timeDisplayEL = document.getElementById('time-display');
var now = moment();
var currentTime = now.format('hh:mm:ssA');
timeDisplayEL.textContent = currentTime

const dateDisplayEl = document.getElementById('date-display');
var currentDate = now.format('dddd, MMMM Do YYYY');
dateDisplayEl.textContent = currentDate

setInterval(() => {
    var now = moment();
    var currentTime = now.format('hh:mm:ssA');
    timeDisplayEL.textContent = currentTime;
    var currentDate = now.format('dddd, MMMM Do YYYY');
    dateDisplayEl.textContent = currentDate;
    
}, 1000);