/* 
function Student(name, gender, age) {
    // Ваш код

}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
}

// ваш код для остальных методов 
*/


function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student();
let student2 = new Student();

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
if(this.marks === undefined){ 
  this.marks = []; 
  };
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
if(this.marks === undefined){ 
  this.marks = []; 
  };
  this.marks.push(...marks);
}

  Student.prototype.getAverage = function () {
    return +(this.marks.reduce((acc, item) => acc + item)/this.marks.length);
  }

  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }


/*
function Student(name, gender, age) {
 let marks;
 this.name = name;
 this.gender = gender;
 this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
    if(this.marks === undefined) {
    this.marks = [];
    mark.forEach( item => this.marks.push(item));
  } else {
    mark.forEach( item => this.marks.push(item));
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(item => sum += item);

  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
}
*/

/*
let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);

let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')

console.log(student1);
console.log(student2);
*/