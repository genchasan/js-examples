function Rectangle(width, height) {
    if (this.constructor.name != "Rectangle")
        throw Error("Sadece new ile çağrılabilir");
    this.width = width;
    this.height = height;
    this.calculateArea = function () {
        return width * height;
    }
}

var rec = new Rectangle(10,20);

console.log(rec.calculateArea());

try {
    var test = Rectangle(10,20);
    test.calculateArea();
} catch (e) {
    console.error(e.toString());
}
