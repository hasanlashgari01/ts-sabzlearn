class Human {
    private static count: number = 0;

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
        Human.count++;
    }

    public static get getCounts(): number {
        return Human.count;
    }

    info() {
        console.log(`${this.name}, ${this.age}`);
    }
}

class Boy extends Human {
    constructor(public name: string, public age: number, public hairColor: string) {
        super(name, age);
    }

    override info() {
        console.log(`${this.name}, ${this.age}, ${this.hairColor}`);
    }
}

const hasan: Boy = new Boy("Hasan", 23, "brown");

hasan.info();

console.log(Human.getCounts);
