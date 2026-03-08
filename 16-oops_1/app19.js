let rectangle = {
    setRectangle: function (l, b) {
        this.length = l;
        this.breadth = b;
    },
    area: function () {
        return this.length * this.breadth;
    },
    perimeter: function () {
        return 2 * (this.length + this.breadth);
    }
}

rectangle.setRectangle(5, 3);
console.log("Area of rectangle: " + rectangle.area());
console.log("Perimeter of rectangle: " + rectangle.perimeter());



