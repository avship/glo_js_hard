"use strict";
const isNumber = function (num) {
  num = String(num);
  return num.match(/^\d+(\.\d+)?$/) !== null;
};
const decorator = function () {
  let n = Math.round(Math.random() * 100);
  let trySteps = 3;
  const playNumberGame = function playNumberGame() {
    if (trySteps === 0) {
      let gameAgain = confirm("Попытки закончились, хотите сыграть еще?");
      if (gameAgain) {
        trySteps = 10;
        n = Math.round(Math.random() * 100);
        playNumberGame();
      }
      return;
    }

    let testDigit = null;
    do {
      testDigit = prompt("Отгадайте число от 1 до 100");
      if (testDigit === null) {
        alert("Игра окончена!");
        return;
      }
      console.log(testDigit);
      if (!isNumber(testDigit)) {
        alert("Введи число!!!");
      }
    } while (!isNumber(testDigit));
    if (n == testDigit) {
      alert(`Поздравляю, Вы угадали!!!`);
    } else if (n > testDigit) {
      trySteps = trySteps - 1;
      alert(`Загаданное число больше, осталось попыток ${trySteps}`);

      playNumberGame();
    } else {
      trySteps = trySteps - 1;
      alert(`Загаданное число меньше, осталось попыток ${trySteps}`);

      playNumberGame();
    }
  };
  return playNumberGame;
};
//console.log(isNumber(null));
const gameFunc = decorator();
gameFunc();
