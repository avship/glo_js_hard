function clock() {
  const dateDOM1 = document.querySelector("#days");
  const dateDOM2 = document.querySelector("#another_format");
  const cDate = new Date();
  const chasAr = ["часов", "час", "часа"];
  const minuteAr = ["минут", "минута", "минуты"];
  const secundsAr = ["секунд", "секунда", "секунды"];

  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
  };
  let formattedDate = cDate
    .toLocaleString("ru", options)
    .replace("г.", "года")
    .replace("  ", " ");

  formattedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const hour = `${cDate.getHours()} ${declensionMaker(
    cDate.getHours(),
    chasAr
  )}`;
  const minutes = `${cDate.getMinutes()} ${declensionMaker(
    cDate.getMinutes(),
    minuteAr
  )}`;
  const seconds = `${cDate.getSeconds()} ${declensionMaker(
    cDate.getSeconds(),
    secundsAr
  )}`;

  dateDOM1.textContent = `Сегодня ${formattedDate} ${hour} ${minutes} ${seconds}`;

  //Второй вариант
  const day = addZero(cDate.getDate());
  const month = addZero(cDate.getMonth() + 1);

  dateDOM2.textContent = `${day}:${month}:${cDate.getFullYear()} - ${addZero(
    cDate.getHours()
  )}:${addZero(cDate.getMinutes())}:${addZero(cDate.getSeconds())}`;
}

setInterval(clock, 1000);

function addZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}
function declensionMaker(num, ar) {
  const lastDigit = num % 10;
  const dozens = Math.floor(num / 10);
  if (lastDigit === 1 && dozens !== 1) {
    return ar[1];
  }
  if (lastDigit > 1 && lastDigit < 5 && dozens !== 1) {
    return ar[2];
  }
  return ar[0];
}
