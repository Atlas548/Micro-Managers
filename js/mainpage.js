// For main page.
const clock = document.getElementById('clock');

setInterval(() => {
    const now = moment();
    const digital = now.format('hh:mm:ssA');
    clock.textContent = digital;
}, 1000);


