// * Intersection
type Admin = {
    name: string;
    email: string;
};

type Seller = {
    name: string;
    age: number;
};

const newUser: Admin & Seller = {
    name: "Ali",
    email: "ali@gamil.com",
    age: 23,
};

// * Type Guard
const showProp = (user: Admin | Seller) => {
    if ("email" in user) {
        console.log(user.email);
    } else if ("age" in user) {
        console.log(user.age);
    }
};

showProp(newUser);

// * Type Guard as instanceof
class Car {
    constructor(public name: string) {
        this.name = name;
    }

    drive(speed: number) {
        console.log(`${this.name} drive ${speed} Km/h`);
    }
}

class Truck extends Car {
    constructor(public name: string) {
        super(name);
    }

    load(weight: number) {
        console.log(`set ${weight}(Kg) load on ${this.name}`);
    }
}

const useCar = (car: Car | Truck) => {
    if (car instanceof Truck) {
        car.load(200);
    } else if (car instanceof Car) {
        car.drive(100);
    }
};

const Pride: Car = new Car("Pride");
const FH: Car = new Car("FH");

