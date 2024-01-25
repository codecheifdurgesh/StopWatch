let time = document.getElementById("timing");
time.innerHTML = "00:00";


// Variable created to store the interval created
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
var timerCreated = null;
var temp = null;
var delta = null;
var minutes = null;
var seconds = null;
var flag = false;


// Event listener for the start button
startButton.addEventListener("click", () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
  var start = Date.now();
  temp = start;
  if (flag === false) {
    timerCreated = setInterval(() => {
      delta = Date.now() - start;
      minutes = Math.floor(delta / 60000);
      seconds = ((delta % 60000) / 1000).toFixed(0);
      time.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000);
  } else {
    flag = false;
    console.log("inside else button");
    delta = (minutes * 60 + seconds) * 1000;
    timerCreated = setInterval(() => {
      delta = delta + 1000;
      minutes = Math.floor(delta / 60000);
      seconds = ((delta % 60000) / 1000).toFixed(0);
      time.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }, 1000);
  }
});

// Event listener for the stop button
stopButton.addEventListener("click", () => {
  time.innerHTML = "00:00";
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  clearInterval(timerCreated);
  timerCreated = null;
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
  flag = true;
  clearInterval(timerCreated);
  timerCreated = "null";
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});
