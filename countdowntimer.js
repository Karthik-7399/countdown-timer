let timeLeft;
let timer;

function startTimer() {
  let minutes = parseInt(document.getElementById("minutes").value);
  timeLeft = minutes * 60;

  timer = setInterval(function () {
    let minutesLeft = Math.floor(timeLeft / 60);
    let secondsLeft = timeLeft % 60;

    document.getElementById("timer").innerHTML =
      minutesLeft + ":" + secondsLeft;

    timeLeft -= 1;

    if (timeLeft < 0) {
     // clearInterval(timer);
      document.getElementById("timer").innerHTML = "Time's up!";
    }
  }, 1000);
}
