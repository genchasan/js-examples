import { Shape } from './shape.js'

class Rectangle extends Shape {
    constructor(height=0, width=0) { // Default değerler hata vermemesi için
        if (!Number.isInteger(width) || !Number.isInteger(height))
            throw new Error("Lütfen sadece sayısal değer girin")
        super();
        this.height = height;
        this.width = width;
    }

    calculateArea() {
        return this.width * this.height;
    }
}

export { Rectangle };