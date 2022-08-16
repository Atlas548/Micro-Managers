// For main page.
const clock = document.getElementById('clock');
var now = moment();
var currentTime = now.format('hh:mm:ssA');
clock.textContent = currentTime


setInterval(() => {
    var now = moment();
    var currentTime = now.format('hh:mm:ssA');
    clock.textContent = currentTime;
}, 1000);


