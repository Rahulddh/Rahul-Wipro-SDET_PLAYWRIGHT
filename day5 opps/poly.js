// class Shape {
//     draw() {
//         console.log('Drawing a shape');
//     }
// }
// class Circle extends Shape {
//     draw() {
//         console.log('Drawing a circle');
//     }
// }
// class Square extends Shape {
//     draw() {
//         console.log('Drawing a square');
//     }
// }
// const shapes = [new Circle(), new Square()];
// shapes.forEach(shape => shape.draw());


class car{
    drive(){
        console.log("driving a car");
    }
}
class tata extends car{
    drive(){
        console.log("driving a tata car");
    }
}
class honda extends car{
    drive(){
        console.log("driving a honda car");
    }
}

const cars = [new tata(), new honda()];
cars.forEach(function(car){
    return car.drive();
});
