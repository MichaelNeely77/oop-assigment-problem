class Course {
    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    calcValue() {
        return this.length / this.price;
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


