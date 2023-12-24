class Person {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

const Hasan: Person = new Person("Hasan", "hasan@gmail.com", 23);
const HamidReza: Person = new Person("Hamid Reza", "hamidreza@gmail.com", 18);

const persons: Person[] = [Hasan, HamidReza];

console.log(persons);
