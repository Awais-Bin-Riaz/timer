var inp = document.getElementById("inp")
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var diasablebtn = document.getElementById("disable")

var interval;
var min = 4;
var sec = 59;
var msec = 99;


function timer() {
    msec--;
    minHeading.innerHTML = min
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    if (msec <= 0) {
        sec--;
        secHeading.innerHTML = sec;
        msec = 100;
    } else if (sec <= 0) {
        min--;
        minHeading.innerHTML = min
        sec = 60;
    }
}

function start() {
    interval = setInterval(timer, 10)
    diasablebtn.disabled = true
}

function stop() {
    clearInterval(interval)
    diasablebtn.disabled = false

}

function reset() {
    min = 5;
    sec = 0;
    msec = 0;

    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop()
    diasablebtn.disabled = false
}