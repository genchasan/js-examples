import Geo from "./lib/geo.js";

let rec = Geo.newRectangle(10, 20);

console.log(rec.calculateArea());

let kare = Geo.newSquare(10);
console.log(kare.calculateArea());

let circle = Geo.newCircle(10);
console.log(circle.calculateArea())