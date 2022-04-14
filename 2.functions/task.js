// Задание 1

function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    } 
    if (i < arr.length) {
    sum += arr[i];
    }
  }

  let average = sum / arr.length;
  avg = Number(average.toFixed(2));
  // avg = +(sum / arr.length).toFixed(2); 

  return { min: min, max: max, avg: avg }
}



// Задание 2

function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  } 

  return max;
}




// Задание 3

function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return Math.abs(max - min);
}

/*
function worker2(arr) {
  return Math.max(...arr) - Math.min(...arr);
}

function mincer(arrOfArr, func) {
  return makeWork(arrOfArr, func);
}
*/

/*
function worker2(arr) {
  let min, max;
  min = Infinity;
  max = -Infinity;

  arr.forEach(item => {
    min = min > item ? item : min;
    max = max < item ? item : max;
  });

  return max - min;
}
*/