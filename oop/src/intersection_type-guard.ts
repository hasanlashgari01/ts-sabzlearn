// * Intersection
type Admin = {
    type?: "ADMIN",
    name: string;
    email: string;
};

type Seller = {
    type?: "SELLER",
    name: string;
    age: number;
};

type SellerAdmin = Seller | Admin;

const newUser: SellerAdmin = {
    name: "Ali",
    email: "ali@gamil.com",
    age: 23,
};

const showProp = (user: Admin | Seller) => {
    // * Type Guard
    
    if ("email" in user) {
        console.log(user.email);
    } else if ("age" in user) {
        console.log(user.age);
    }

    // * Discriminated Unions

    switch (user.type) {
      case "ADMIN": {
        console.log(user.email)
        break;
      }
      case "SELLER": {
        console.log(user.age)
        break;
      }
      default:
        throw new Error("invalid member");
    }
};

showProp(newUser);

// * typeof as Type Guard

type Combine = string | number;

const add = (param1: Combine, param2 : Combine) => {
  if (typeof param1 === 'string' && typeof param2 === 'string') {
      return param1.toString() + param2.toString()
  } else if (typeof param1 === 'number' && typeof param2 === 'number') {
      return param1 + param2
  }
};

// * Type Guard as instanceof
class Cars {
    constructor(public name: string) {
        this.name = name;
    }

    drive(speed: number) {
        console.log(`${this.name} drive ${speed} Km/h`);
    }
}

class Truck extends Cars {
    constructor(public name: string) {
        super(name);
    }

    load(weight: number) {
        console.log(`set ${weight}(Kg) load on ${this.name}`);
    }
}

const useCar = (car: Cars | Truck) => {
    if (car instanceof Truck) {
        car.load(200);
    } else if (car instanceof Cars) {
        car.drive(100);
    }
};

const Pride: Cars = new Cars("Pride");
const FH: Cars = new Cars("FH");

