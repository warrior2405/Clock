function updateClock() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let time_hours = hours;
  document.getElementById("hours").textContent = time_hours;

  let minutes = now.getMinutes().toString().padStart(2, "0");
  let time_minutes = minutes;
  document.getElementById("minutes").textContent = time_minutes;

  let seconds = now.getSeconds().toString().padStart(2, "0");
  let time_seconds = seconds;
  document.getElementById("seconds").textContent = time_seconds;
}

setInterval(updateClock, 1000);
