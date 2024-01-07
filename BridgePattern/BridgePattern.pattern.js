// Implementor
class DrawingAPI {
    drawCircle(x, y, radius) {}

    drawSquare(x, y, side) {}
}

// ConcreteImplementor
class SVGDrawingAPI extends DrawingAPI {
    drawCircle(x, y, radius) {
        console.log(
            `Drawing a circle in SVG at (${x}, ${y}) with radius ${radius}`
        );
    }

    drawSquare(x, y, side) {
        console.log(
            `Drawing a square in SVG at (${x}, ${y}) with side ${side}`
        );
    }
}

class CanvasDrawingAPI extends DrawingAPI {
    drawCircle(x, y, radius) {
        console.log(
            `Drawing a circle on canvas at (${x}, ${y}) with radius ${radius}`
        );
    }

    drawSquare(x, y, side) {
        console.log(
            `Drawing a square on canvas at (${x}, ${y}) with side ${side}`
        );
    }
}

// Abstraction
class Shape {
    constructor(drawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    draw() {}

    resize() {}
}

// RefinedAbstraction
class CircleShape extends Shape {
    constructor(x, y, radius, drawingAPI) {
        super(drawingAPI);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw() {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }

    resize(radius) {
        this.radius = radius;
    }
}

// Usage
const circle1 = new CircleShape(1, 2, 3, new SVGDrawingAPI());
circle1.draw();

const circle2 = new CircleShape(5, 7, 11, new CanvasDrawingAPI());
circle2.draw();
