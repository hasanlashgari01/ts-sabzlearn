"use strict";
class Animal {
    constructor(name, color, _sound) {
        this.name = name;
        this.color = color;
        this._sound = _sound;
    }
    get getSound() {
        return this._sound;
    }
    set setSound(v) {
        this._sound = v;
    }
}
const Pet = new Animal("Persian Pet", "white", "hop hop");
Pet.setSound = "hop";
console.log(Pet);
