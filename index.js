const display = document.getElementById("display");

let timer = null;

let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    if(!isRunning) {
        isRunning = true;
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);
    }
}

function stop() {
    if(isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    elapsedtime = 0;
    display.textContent = "00:00:00:00";
}
function update() {
    const currentTime = Date.now();
    elapsedtime = currentTime - starttime;
    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime / 1000 % 60);
    let millies = Math.floor(elapsedtime % 1000 /10);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    millies = String(millies).padStart(2, '0');

    display.textContent = `${hours}:${minutes}:${seconds}:${millies}`;
}