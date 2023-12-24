class Animal {
    constructor(public name: string, public color: string, private _sound: string) {}

    get getSound(): string {
        return this._sound;
    }

    set setSound(v: string) {
        this._sound = v;
    }
}

const Pet: Animal = new Animal("Persian Pet", "white", "hop hop");

Pet.setSound = "hop";

console.log(Pet);
