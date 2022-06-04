"use strict";

const week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let currentDate = new Date().getDay();
if (currentDate === 0) {
  currentDate = 6;
} else {
  currentDate -= 1;
}
for (let i = 0; i < week.length; i++) {
  let tmpBegin = "<p>";
  let tmpEnd = "</p>";
  if (i >= 5) {
    tmpBegin += "<i>";
    tmpEnd = "</i>" + tmpEnd;
  }
  if (i === currentDate) {
    tmpBegin += "<b>";
    tmpEnd = "</b>" + tmpEnd;
  }
  week[i] = tmpBegin + week[i] + tmpEnd;
}

document.querySelector("#days").innerHTML = week.join("\n");
//console.log(currentDate, week);
