function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => arr1[idx] === arr2[idx]);
}

/*
function compareArrays(arr1, arr2) {
  let result = true;

  if (arr1.length === arr2.length && arr1.every((item, idx) => arr1[idx] === arr2[idx])) {
    return result;
  } else {
    return false;
  }
}
*/
Задача 2. Фильтрация и преобразование массива
Создайте функцию advancedFilter(arr), которая отбирает из массива чисел только положительные числа, кратные 3 и возвращает новый массив с отобранными числами, умноженными на 10. Для этого к исходному массиву примените метод filter. Можно 2 раза: сначала отберите только положительные числа, затем только кратные 3. Потом используйте метод map, чтобы умножить полученные значения на 10. В задаче следует пользоваться методами массива, а не циклом for.

let result = arr.filter(...).filter(...).map(...)
Пример вызова:

advancedFilter([-1,6,-9,3]); // [60,30]
advancedFilter([-10,-21,12,123]); // [120, 1230]
advancedFilter([-1,-2]); // []







function advancedFilter(arr) {
  return arr.filter((arr => arr > 0 && arr % 3 === 0)).map((arr => arr * 10));
}

/*
function advancedFilter(arr) {
  let resultArr = arr.filter((arr => arr > 0 && arr % 3 === 0)).map((arr => arr * 10));

  return resultArr;
}
*/



