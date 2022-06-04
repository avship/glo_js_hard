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

const workingDays =
  "<p>" + week.slice(0, week.length - 2).join(`</p>\n<p>`) + "</p>\n";
const weekend =
  "<p><i>" +
  week.slice(week.length - 2, week.length).join(`</i></p>\n<p><i>`) +
  "</i></p>";

document.querySelector("#days").innerHTML = workingDays + weekend;
