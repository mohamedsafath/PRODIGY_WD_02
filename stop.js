let timerInterval;
let elapsedTime = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time-display');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const lapButton = document.getElementById('lap-btn');
const lapsContainer = document.getElementById('laps');

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsPart = milliseconds % 1000;

    return  `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(millisecondsPart / 10)).padStart(2, '0')}`;
}

function updateTime() {
    elapsedTime += 10;
    timeDisplay.textContent = formatTime(elapsedTime);
}

startButton.addEventListener('click', () => {
    if (!isRunning) {
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;
    }
});

pauseButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = formatTime(elapsedTime);
    lapsContainer.innerHTML = '';
    isRunning = false;
});

lapButton.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('li');
        lapTime.textContent = formatTime(elapsedTime);
        lapsContainer.appendChild(lapTime);
    }
});