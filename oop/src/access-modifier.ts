// ! Public => All
// ! Private => Just Self Class
// ! Protected => Just Self Class and SubClass
// ! ReadOnly => Just read, Can't Update
class User2 {
    name: string;
    readonly email: string; // readonly
    age: number;
    protected className: string; // protected

    constructor(name: string, email: string, age: number, className: string) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.className = className;
    }
}

class Teacher extends User2 {
    public students: string[]; // public
    private privateClass: string[]; // private

    constructor(
        name: string,
        email: string,
        age: number,
        className: string,
        students: string[],
        privateClass: string[]
    ) {
        super(name, email, age, className);

        this.students = students;
        this.privateClass = privateClass;
    }
}

const SaeediRad: Teacher = new Teacher("Mohammad Amin", "amin@gmail.com", 24, "Programming", [], []);

console.log(SaeediRad);
