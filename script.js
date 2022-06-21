function declensionMaker(num, word) {
  const chas = ["час", "часа", "часов"];
  const minute = ["минута", "минут", "минуты"];
  const secunds = ["секунда", "секунды", "секунд"];

  const dozens = Math.floor(num / 10);
  num = num % 10;
  if (word === "час") {
    if (num === 1) {
      return chas[0];
    } else if (num < 5) {
      return chas[1];
    } else {
      return chas[2];
    }
  }
  if (word === "минута") {
    if (num == 1) {
      return minute[0];
    } else if (num < 5 && num > 1) {
      return minute[2];
    } else {
      return minute[1];
    }
  }
  if (word === "секунда") {
    if (num === 1) {
      return secunds[0];
    } else if ((num > 1) & (num < 5)) {
      return secunds[1];
    } else {
      return secunds[2];
    }
  }
}
//a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
//console.log(`Сегодня ${formattedDate} ${hour} ${minutes} ${seconds}`);
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
  const dateDOM1 = document.querySelector("#days");
  const dateDOM2 = document.querySelector("#another_format");
  dateDOM1.textContent = addZeroToDateValues();

  let currentDate = new Date();
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
  let formattedDate = currentDate
    .toLocaleString("ru", options)
    .replace("г.", "года")
    .replace("  ", " ");
  const hour = `${currentDate.getHours()} ${declensionMaker(
    currentDate.getHours(),
    "час"
  )}`;
  const minutes = `${currentDate.getMinutes()} ${declensionMaker(
    currentDate.getMinutes(),
    "минута"
  )}`;
  const seconds = `${currentDate.getSeconds()} ${declensionMaker(
    currentDate.getSeconds(),
    "секунда"
  )}`;
  //a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
  dateDOM2.textContent = `Сегодня ${formattedDate} ${hour} ${minutes} ${seconds}`;
}

setInterval(clock, 1000);
