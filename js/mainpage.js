// For main page.
const clock = document.getElementById('clock');
var now = moment();
var currentTime = now.format('hh:mm:ssA');
clock.textContent = currentTime


setInterval(() => {
    clock.textContent = digital;
}, 1000);


