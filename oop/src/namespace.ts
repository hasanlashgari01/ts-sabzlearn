namespace IranKhodro {
  export let car = "Pars";

  export class Body {
    constructor(public name: string, public color: string) {
      this.name = name;
      this.color = color;
    }

    make() {
      console.log(`${this.name} created successfully`);
    }
  }
}

namespace Saipa {
  export let car = "Pride";
}

const Pars = new IranKhodro.Body("pars", "white");
Pars.make();
