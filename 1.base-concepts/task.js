'use strict';
// https://learn.javascript.ru/strict-mode

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);

  if (d > 0) {
    arr.push( (-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a) );
    // arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    // arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    // arr = [- b / (2 * a)];
  } 

  return arr;
}

// function solveEquation(a, b, c) {
//   let arr;
//   let d = Math.pow(b, 2) - (4*a*c);

//   if (d < 0) {
//     arr = [];
//   } else if (d === 0) {
//     arr = [-b / (2 * a)];
//   } else {
//     arr = [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
//   };

//   return arr;
// }


function calculateTotalMortgage(percent, contribution, amount, date) {

  // контроль на корректность введенных данных
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит некорректное значение: ${percent}`;
  } else if (isNaN(contribution)) {
    return `Параметр "Первоначальный взнос" содержит некорректное значение: ${contribution}`;
  } else if (isNaN(amount)) {
    return `Параметр "Общая стоимость" содержит некорректное значение: ${amount}`;
  }

    // 1/12 процентной ставки
    let percentRate = percent / (100 * 12);
    //количество месяцев
    let period = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); 
    // ежемесячный платеж
    let currentPay = (amount - contribution) * (percentRate + percentRate / ((Math.pow((1 + percentRate), period)) - 1)); 

    let totalAmount = (currentPay * period).toFixed(2);

    console.log(totalAmount);
    return Number(totalAmount); 
}
