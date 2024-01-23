// * Interface
interface NewUser {
    name: string;
    email: string;
    // login(): boolean;
    login?: () => boolean;
}

// * Extends and Access Modifiers in Interface
interface Cars {
    readonly company: string;
    color: string;
    year: number;
    model?: string;

    drive(speed: number): void;
}

interface PeugeotInterface extends Cars {
    passengers: number;
}

// * Implements in Interface
class Peugeot implements PeugeotInterface {
    private static carNames: string[] = [];

    constructor(
        public company: string,
        public color: string,
        public year: number,
        public model: string,
        public passengers: number
    ) {
        this.company = company;
        this.color = color;
        this.year = year;
        this.model = model;
        this.passengers = passengers;
        Peugeot.carNames.push(this.model);
    }

    public static get getCars(): string[] {
        return Peugeot.carNames;
    }

    drive(speed: number): void {
        console.log(`${this.model} drive ${speed}Km/h`);
    }
}
