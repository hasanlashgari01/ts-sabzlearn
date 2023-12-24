class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class Student extends User {
    lessons: string[];
    constructor(name: string, email: string, age: number, lessons: string[]) {
        super(name, email, age);
        this.lessons = lessons;
    }
}

const Ramin: Student = new Student("Ramin", "ramin@gmail.com", 28, ["Python", "Django"]);

console.log(Ramin);
