const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");
const clear = document.querySelector(".clearbtn");
const lapsul = document.querySelector(".laps");
let isPaused = false;
const zeropad = (num) => {
  return String(num).padStart(2, "0");
};
let min = 0,
  sec = 0,
  msec = 0,
  timeInterval;
start.onclick = () => {
  timeInterval = setInterval(() => {
    msec++;
    if (msec == 100) {
      sec++;
      msec = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    document.querySelector(".watch").innerText = `${zeropad(min)}:${zeropad(
      sec
    )}:${zeropad(msec)}`;
  }, 10);
  lap.removeAttribute("disabled");
  pause.removeAttribute("disabled"); 
  start.setAttribute("disabled", true);
};

pause.onclick = () => {
  clearInterval(timeInterval);
  lap.setAttribute("disabled", true);
  isPaused = true; 
  start.removeAttribute("disabled"); 
  pause.setAttribute("disabled", true); 
};

reset.onclick = () => {
  lapsul.innerHTML = "";
  min = sec = msec = count = 0;
  clearInterval(timeInterval);
  document.querySelector(".watch").innerText = "00:00:00";
  lap.setAttribute("disabled", true); 
  pause.setAttribute("disabled", true); 
  start.removeAttribute("disabled"); 
  isPaused = false; 
};
let count = 0;
lap.onclick = () => {
  count++;
  let li = document.createElement("li");
  li.innerHTML = `${"#" + count} -${zeropad(min)}:${zeropad(sec)}:${zeropad(
    msec
  )}`;
  lapsul.appendChild(li);
};

clear.onclick = () => {
  lapsul.innerHTML = "";
};
