"use strict";
const newUser = {
    name: "Ali",
    email: "ali@gamil.com",
    age: 23,
};
// * Type Guard
const showProp = (user) => {
    if ("email" in user) {
        console.log(user.email);
    }
    else if ("age" in user) {
        console.log(user.age);
    }
};
showProp(newUser);
// * Type Guard as instanceof
class Car {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    drive(speed) {
        console.log(`${this.name} drive ${speed} Km/h`);
    }
}
class Truck extends Car {
    constructor(name) {
        super(name);
        this.name = name;
    }
    load(weight) {
        console.log(`set ${weight}(Kg) load on ${this.name}`);
    }
}
const useCar = (car) => {
    if (car instanceof Truck) {
        car.load(200);
    }
    else if (car instanceof Car) {
        car.drive(100);
    }
};
const Pride = new Car("Pride");
const FH = new Car("FH");
