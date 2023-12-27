"use strict";
// * Implements in Interface
class Peugeot {
    constructor(company, color, year, model, passengers) {
        this.company = company;
        this.color = color;
        this.year = year;
        this.model = model;
        this.passengers = passengers;
        this.company = company;
        this.color = color;
        this.year = year;
        this.model = model;
        this.passengers = passengers;
        Peugeot.carNames.push(this.model);
    }
    static get getCars() {
        return Peugeot.carNames;
    }
    drive(speed) {
        console.log(`${this.model} drive ${speed}Km/h`);
    }
}
Peugeot.carNames = [];
