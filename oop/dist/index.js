"use strict";
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const Hasan = new Person("Hasan", "hasan@gmail.com", 23);
const HamidReza = new Person("Hamid Reza", "hamidreza@gmail.com", 18);
const persons = [Hasan, HamidReza];
console.log(persons);
