class Car {
    constructor (name) {
        this.name = name;
        this.power = 0;
    }

    horsepower (power) {
        this.power = power;
        console.log(`${this.name} has ${this.power} horsepower!`);
    }
}

class Jaguar extends Car {
    constructor(name, color) {
        super(name);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    toString() {
        return `${this.name}_${this.color}_${this.power}`;
    }
}

let jag = new Jaguar("LX", "Green");
jag.horsepower(360);
console.log(jag.toString());

// module.exports = Car;

export {
    Car,
    Jaguar
};