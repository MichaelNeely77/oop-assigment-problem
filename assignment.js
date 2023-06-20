class Course {
    #price;
    get price() {
        return '$' + this.#price;
    }
    set price (value) {
        if(value < 0) {
            throw 'Invalid value'
        }
        this.#price = value;
    }
    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    calcValue() {
        return this.length / this.#price;
    }

    printSummary() {
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`)
    }
}

const firstCourse = new Course('introduction', 30, 29.99);
const secondCourse = new Course('The Second Course', 45, 39.99);

console.log(firstCourse);
console.log(secondCourse);

console.log(firstCourse.calcValue());
console.log(secondCourse.calcValue());

firstCourse.printSummary();
secondCourse.printSummary();

class PracticalCourse extends Course {
    constructor(title, length, price, exerciseCount) {
       super(title, length, price);
       this.numOfExercises = exerciseCount;
    }
}

const angularCourse = new PracticalCourse(
    'The Angular Course',
    36,
    39.99,
    150
);

console.log(angularCourse);
angularCourse.printSummary();

class TheoreticalCourse extends Course {
    publish = () => console.log('Somethkng');
}

const pythonCourse = new TheoreticalCourse(
    'Python Course',
    45,
    23.99
);

pythonCourse.printSummary();
pythonCourse.publish();
