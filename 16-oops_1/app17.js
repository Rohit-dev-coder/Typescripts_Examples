let rectangle = {
    length: 0,
    breadth: 0,
    setRectangle: function (l, b) {
        rectangle.length = l;
        rectangle.breadth = b;
    },
    area: function () {
        return rectangle.length * rectangle.breadth;
    },
    perimeter: function () {
        return 2 * (rectangle.length + rectangle.breadth);
    }
}

rectangle.setRectangle(5, 3);
console.log("Area of rectangle: " + rectangle.area());
console.log("Perimeter of rectangle: " + rectangle.perimeter());



