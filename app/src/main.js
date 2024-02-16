let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

const displayTimeLeft = seconds => {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
};

const timer = seconds => {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayEndTime = timestamp => {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? "0" : ""
    }${minutes}${hour >= 12 ? "pm" : "am"}!`;
};

const startTimer = e => {
	const seconds = parseInt(e.target.dataset.time)
	timer(seconds)
}

const handleSubmit = (e) => {
  e.preventDefault();
  const mins = e.target.minutes.value;
  e.target.querySelector;
  timer(mins * 60);
};

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener('submit', handleSubmit);
