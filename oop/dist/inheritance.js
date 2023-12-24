"use strict";
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
class Student extends User {
    constructor(name, email, age, lessons) {
        super(name, email, age);
        this.lessons = lessons;
    }
}
const Ramin = new Student("Ramin", "ramin@gmail.com", 28, ["Python", "Django"]);
console.log(Ramin);
