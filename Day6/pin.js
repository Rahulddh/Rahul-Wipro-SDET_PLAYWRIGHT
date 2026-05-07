// const { useCallback } = require("react");

// function person(name) {
//     this.name = name;
// }

// person.prototype.sayhi = function(){
//     console.log('hello ' + this.name)
// }
// const me = new person("aryan");
// const you= new person("rahul");

// me.sayhi();
// you.sayhi();

// console.log(Object.getPrototypeOf(me)=== person.prototype);
// console.log(me.sayhi === you.sayhi);


// ###CALLBACK FUNCTION ###

function greetuser(name, callback){
    console.log("hello "+ name);

    callback();
}
function saygoodbye(){
    console.log("goodbye!");

}

greetuser('Rahul', saygoodbye);

function doforeach(e){
    console.log(e);
}

const doeach =e => console.log(e);
[1,2,3,4].forEach(doeach); //callback | foreach is a higher order function
//[1,2,3,4].forEach(e => console.log(e)); // anonymous callback

// Stack --> box |   |  --> 1| 2 |  3  -->  3| 2| 1 (LIFO)
// Heap --> box |   |  -->   doeach | saygoodbye | greetuser


let 