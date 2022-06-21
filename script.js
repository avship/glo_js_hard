let now = new Date();
let options = {
  //era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
  // hour: "numeric",
  // minute: "numeric",
  // second: "numeric",
};
let formattedDate = now
  .toLocaleString("ru", options)
  .replace("г.", "года")
  .replace("  ", " ");
function hourFormatter(now) {
  if (now.getHours() % 10 == 1) {
    return "час";
  }
  if (now.getHours() < 5 && Math.floor(now.getHours() / 10)) return "часа";
  return "часов";
}
function minuteFormatter(now) {
  if (now.getMinutes() % 10 == 1) {
    return "минута";
  }
  if (now.getMinutes() % 10 < 5 && now.getMinutes() % 10 > 0) {
    return "минуты";
  }
  return "минут";
}
function secondsFormatter(now) {
  if (now.getSeconds() % 10 == 1) {
    return "секунда";
  }
  if (now.getSeconds() % 10 < 5 && now.getSeconds() % 10 > 0) {
    return "секунды";
  }
  return "секунд";
}
const hour = `${now.getHours()} ${hourFormatter(now)}`;
const minutes = `${now.getMinutes()} ${minuteFormatter(now)}`;
const seconds = `${now.getSeconds()} ${secondsFormatter(now)}`;
//a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
console.log(`Сегодня ${formattedDate} ${hour} ${minutes} ${seconds}`);

//б) '04.02.2020 - 21:05:33'
function addZeroToDateValues() {
  const date = new Date();
  const day = date.getDay() < 10 ? `0${date.getDay()}` : `${date.getDay()}`;
  const month =
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
  const hour =
    date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
  return `${day}.${month}.${date.getFullYear()} - ${hour}:${minutes}:${seconds}`;
}
console.log(addZeroToDateValues());
function clock() {
  const dateDOM = document.querySelector("#days");
  dateDOM.textContent = addZeroToDateValues();
}

setInterval(clock, 1000);
