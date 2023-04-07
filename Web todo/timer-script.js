document.addEventListener("DOMContentLoaded", function() {
    let timeInput = document.getElementById("timer-input");
    let startBtn = document.getElementById("start-btn");
    let stopBtn = document.getElementById("stop-btn");
    let timerDisplay = document.getElementById("timer");
    let countdown;
  
    function startTimer() {
      if (!countdown) {
        let minutes = timeInput.value;
        let seconds = 0;
        if (minutes < 1) return;
        countdown = setInterval(() => {
          if (seconds === 0) {
            if (minutes === 0) {
              stopTimer();
              return;
            } else {
              minutes--;
              seconds = 59;
            }
          } else {
            seconds--;
          }
          timerDisplay.innerHTML = formatTime(minutes, seconds);
        }, 1000);
      }
    }
  
    function stopTimer() {
      clearInterval(countdown);
      countdown = null;
      timerDisplay.innerHTML = "00:00";
    }
  
    function formatTime(minutes, seconds) {
      let formattedMinutes = minutes.toString().padStart(2, "0");
      let formattedSeconds = seconds.toString().padStart(2, "0");
      return `${formattedMinutes}:${formattedSeconds}`;
    }
  
    timeInput.addEventListener("keydown", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        startTimer();
      }
    });
  
    startBtn.addEventListener("click", function() {
      startTimer();
    });
  
    stopBtn.addEventListener("click", function() {
      stopTimer();
    });
  });
  