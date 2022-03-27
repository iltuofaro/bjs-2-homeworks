// Задача 1

function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
    throw new Error ("Невалидное значение");
    }
return parsed;
}

function validateCount(value) {
    try {
     return parseCount(value);
    } catch (errorValid) {
        return errorValid;
    } 
}


//Задача 2

class Triangle {
    constructor (a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;

      if((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error ("Треугольник с такими сторонами не существует");
      }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let semiPerimeter = this.getPerimeter() / 2;
        return this.area = +(Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * 
    (semiPerimeter - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea: () => {return "Ошибка! Треугольник не существует"},
            getPerimeter: () => {return "Ошибка! Треугольник не существует"},
        }
    }
}

/* //v2
const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea: () => {return "Ошибка! Треугольник не существует"},
            getPerimeter: () => {return "Ошибка! Треугольник не существует"},
        }
    }
}
*/
