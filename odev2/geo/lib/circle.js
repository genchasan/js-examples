import { Shape } from "./shape.js";

class Circle extends Shape {
    constructor(diameter=0) {
        if (!Number.isInteger(diameter))
            throw new Error("Lütfen sadece sayısal değer girin")
        super();
        this.diameter = diameter;
    }
    calculateArea() {
        return Math.PI * this.diameter * this.diameter;
    }
}

export { Circle };