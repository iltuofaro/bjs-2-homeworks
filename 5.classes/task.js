// Задача 1

class PrintEditionItem {
    _state = 100
    type = null

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
	}

	set state(numberState) {
        this._state = Math.min(Math.max(numberState, 0), 100)
    }
	/* //вариант 1
	set state(numberState) {
		if (numberState < 0) {
			this.state = 0;
		} else if (numberState > 100) {
			this.state = 100;
		} else {
			this._state = numberState;
		}
	}
	*/

	get state() {
		return this._state;
	}

	fix() {
		this.state *= 1.5;
	}
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book'
        this.author = author
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}


// Задача 2

class Library {

	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy = function (type, value) {
		let findBook = this.books.find(item => item[type] === value);
		if (findBook) {
			return findBook;
		} else {
			return null;
		}
	}

	giveBookByName = function (bookName) {
		let index = this.books.findIndex(item => item.name === bookName);
		if (index > -1) {
			return this.books.splice(index, 1)[0];
		} else {
			return null;
		}
	}
    /* 
    //вариант 1
	giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
    */
}


// Задача 3

// Мы продолжаем совершенствовать журнал успеваемости студентов. Нам предстоит преобразовать код прошлого ДЗ к классам, а также реализовать следующие возможности:

// внесение оценки по названию предмета;
// получение средней оценки по предмету;
// получение средней оценки по всем предметам.
// при неверной оценке (не в промежутке 1-5) оценка не заносится в журнал. Выводится сообщение об ошибке.
// Для решения задания, и это представляет наибольшую сложность, вам предстоит придумать структуру данных для хранения оценок по предметам. Работать это должно следующим образом:

// Пример
// class Student {
//   // ваш код
// }

// const student = new Student("Олег Никифоров");
// student.addMark(5, "algebra");
// student.addMark(5, "algebra");
// student.addMark(5, "geometry");
// student.addMark(4, "geometry");
// student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
// student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
// student.getAverageBySubject("biology"); // Несуществующий предмет
// student.getAverage(); // Средний балл по всем предметам 4.75
// student.exclude("Исключен за попытку подделать оценки");
// Критерии выполнения
// Реализованы все методы, в каждом из которых вы привели примеры работы исключительных случаев (неверный формат оценки, несуществующий предмет и т.д);
// Возможно добавление оценки по любому предмету.

