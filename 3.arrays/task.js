function compareArrays(arr1, arr2) {
  let result = true;

  if (arr1.length === arr2.length && arr1.every((item, idx) => arr1[idx] === arr2[idx])) {
    return result;
  } else {
    
    return false;
  }
}

/*
// вариант 2
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, idx) => arr1[idx] === arr2[idx]);
}
*/


function advancedFilter(arr) {
  let resultArr = arr.filter((arr => arr > 0 && arr % 3 === 0)). map((arr => arr * 10));

  return resultArr;
}

/*
// вариант 2
function advancedFilter(arr) {
  return arr.filter((arr => arr > 0 && arr % 3 === 0)). map((arr => arr * 10));
}
*/
