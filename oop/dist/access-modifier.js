"use strict";
// ! Public => All
// ! Private => Just Self Class
// ! Protected => Just Self Class and SubClass
// ! ReadOnly => Just read, Can't Update
class User2 {
    constructor(name, email, age, className) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.className = className;
    }
}
class Teacher extends User2 {
    constructor(name, email, age, className, students, privateClass) {
        super(name, email, age, className);
        this.students = students;
        this.privateClass = privateClass;
    }
}
const SaeediRad = new Teacher("Mohammad Amin", "amin@gmail.com", 24, "Programming", [], []);
console.log(SaeediRad);
