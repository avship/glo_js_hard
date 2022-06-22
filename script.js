function declensionMaker(num, ar) {
  if (num === 1) {
    return ar[1];
  }
  if ((num > 1) & (num < 5)) {
    return ar[2];
  }
  return ar[0];
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

  const chasAr = ["часов", "час", "часа"];
  const minuteAr = ["минут", "минута", "минуты"];
  const secundsAr = ["секунд", "секунда", "секунды"];

  const hour = `${currentDate.getHours()} ${declensionMaker(
    currentDate.getHours() % 10,
    chasAr
  )}`;
  const minutes = `${currentDate.getMinutes()} ${declensionMaker(
    currentDate.getMinutes() % 10,
    minuteAr
  )}`;
  const seconds = `${currentDate.getSeconds()} ${declensionMaker(
    currentDate.getSeconds() % 10,
    secundsAr
  )}`;
  //a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
  dateDOM2.textContent = `Сегодня ${formattedDate} ${hour} ${minutes} ${seconds}`;
}

setInterval(clock, 1000);
