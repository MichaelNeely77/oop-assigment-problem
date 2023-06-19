class Course {
    constructor(courseTitle, courseLength, coursePrice) {
        this.title = courseTitle;
        this.length = courseLength;
        this.price = coursePrice;
    }

    calcValue() {
        return this.length/this.price;
    }

    printSummary() {
        console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`)
    }
}

const firstCourse = new Course('introduction', '30 mins', '29.99');
const secondCourse = new Course('The Second Course', '45 mins', '39.99');

console.log(firstCourse);
console.log(secondCourse);