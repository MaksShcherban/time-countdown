let interval;
let dataIn;

function setDate(e) {
  dataIn = e.target.value;

  // Запускаємо таймер лише після встановлення дати
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(countDown, 1000);
}

function countDown() {
  const requireDate = new Date(dataIn);
  const nowDate = new Date();
  let define = requireDate - nowDate;

  const day = document.getElementById("day");
  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const chronograph = [day, hour, minute, second];

  if (define < 0) {
    clearInterval(interval);
    for (let i of chronograph) {
      i.hidden = false;
      i.innerText = "0";
    }
  }

  let days = Math.trunc(define / (1000 * 60 * 60 * 24));
  let hours = Math.trunc(
    (define / (1000 * 60 * 60 * 24) -
      Math.trunc(define / (1000 * 60 * 60 * 24))) *
      24
  );
  let mins = Math.trunc(
    (define / (1000 * 60 * 60) - Math.trunc(define / (1000 * 60 * 60))) * 60
  );

  let sec = Math.trunc(
    (define / (1000 * 60) - Math.trunc(define / (1000 * 60))) * 60
  );

  for (let i of chronograph) {
    i.hidden = false;
  }

  day.innerText = days;
  hour.innerText = hours;
  minute.innerText = mins;
  second.innerText = sec;
}

let input = document.getElementById("party");
input.addEventListener("change", setDate);
