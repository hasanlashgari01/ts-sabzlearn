"use strict";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
        Human.count++;
    }
    static get getCounts() {
        return Human.count;
    }
    info() {
        console.log(`${this.name}, ${this.age}`);
    }
}
Human.count = 0;
class Boy extends Human {
    constructor(name, age, hairColor) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    info() {
        console.log(`${this.name}, ${this.age}, ${this.hairColor}`);
    }
}
const hasan = new Boy("Hasan", 23, "brown");
hasan.info();
console.log(Human.getCounts);
