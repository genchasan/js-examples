import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import { Circle } from "./circle.js";

let Geo = {
    newRectangle : (width, height) => new Rectangle(height, width),
    newSquare : width => new Square(width),
    newCircle : diameter => new Circle(diameter)
}

export { Geo as default };