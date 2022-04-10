// В первом задании требовалось реализовать декоратор, 
// который позволит сократить количество вычислений на основе кеша. 
// То есть в некоторых случаях не придётся вычислять функцию заново 
// (если она уже вычислялась). 

// У вас функция вычисляется вне зависимости 
// от того, было ли найдено значение или нет. 

// Вам нужно строки 10-11 перенести под первое условие. 
// Чтобы функция вычислялась только в том случае, если значение
// не было найдено в кеше… 




// Задание 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {

    const hash = args.join(',');

    const idx = cache.findIndex(item => item.hash === hash);

    //ниже строки 10-11
    let result = func(...args);
    cache.push({ hash: hash, result: result });

    if (idx !== -1) {
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }

    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }

  return wrapper;
}



// Так же, во втором задании желательно поправить форматирование условие. 
// Действие никогда не пишите на строке с условием 
// (правильное форматирование у вас написано в третьем задании).


// Задание 2
function debounceDecoratorNew(func, ms) {
  let first = false;
  let pause;

  function wrapper(...args) {
    clearTimeout(pause);

    pause = setTimeout(() => {
      first = false;
      func.apply(this, args);
    }, ms);

    if (first) return;

    func.apply(this, args);
    first = true;
  }
  return wrapper;
}

// Задание 3
function debounceDecorator2(func) {
  let first = false;
  let pause;
  wrapper.count = 0;

  function wrapper(...args) {

    clearTimeout(pause);

    pause = setTimeout(() => {
      first = false;
      func.apply(this, args);
      wrapper.count++;
    }, ms);

    if (first) {
      return;
    }

    func.apply(this, args);
    wrapper.count++;
    first = true;

    console.log(wrapper.count);
  }
  return wrapper;
}