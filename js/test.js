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
