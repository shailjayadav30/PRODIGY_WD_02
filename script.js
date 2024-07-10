let startTime = 0;
let endTime = 0;
let lapTime = 0;
let timerInterval = null;
let laps = [];
let isRunning = false;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTimer);
document.querySelector(".clearbtn").addEventListener("click", clearAllLaps);

function startTimer() {
  if (!isRunning) {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
  }
}

function pauseTimer() {
  if (isRunning) {
    endTime = new Date().getTime();
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  startTime = 0;
  endTime = 0;
  lapTime = 0;
  isRunning = false;
  document.querySelector(".min").textContent = "00:";
  document.querySelector(".sec").textContent = "00:";
  document.querySelector(".milisec").textContent = "00";
}

function lapTimer() {
  if (isRunning) {
    lapTime = new Date().getTime() - startTime;
    const lap = formatTime(lapTime);
    laps.push(lap);
    const lapList = document.querySelector(".laps");
    const lapItem = document.createElement("li");
    lapItem.textContent = lap;
    lapList.appendChild(lapItem);
  }
}

function clearAllLaps() {
  document.querySelector(".laps").innerHTML = "";
  laps = [];
}

function updateTimer() {
  const currentTime = new Date().getTime();
  const timeElapsed = currentTime - startTime;
  const timeString = formatTime(timeElapsed);
  document.querySelector(".min").textContent = timeString.split(":")[0] + ":";
  document.querySelector(".sec").textContent = timeString.split(":")[1] + ":";
  document.querySelector(".milisec").textContent = timeString.split(":")[2];
}

function formatTime(time) {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);
  if (milliseconds > 99) milliseconds = 99;
  if (seconds > 59) seconds = 59;
  return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;

  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }
}
