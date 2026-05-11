"use strict";
// const message = "Hello TypeScript";
// console.log(message);
var Role;
(function (Role) {
    Role["User"] = "USER";
    Role["Admin"] = "ADMIN";
    Role["SuperAdmin"] = "SUPER_ADMIN";
})(Role || (Role = {})); // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin
const user = {
    id: 1,
    name: "Rahul",
    age: 25,
    role: Role.User,
    email: "rahul@gmail.com"
};
const admin = {
    id: 2,
    name: "Aman",
    age: 30,
    email: "aman@gmail.com",
    role: Role.Admin,
    isAdmin: true
};
console.log(user, admin);
let coordinates = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);
let arr = [1, 2, 3]; // array of numbers
console.log("Array:", arr);
// #### genrics functions ####
// function identity<T>(arg: T): T {  //T is a variable we can use any letter but T is standerd
//     return arg;
// }
// let output = identity<number>(10);
// let outpu1 = identity<string>("Rahul");
// let outpu2 = identity<boolean>(true);
// console.log(output, outpu1, outpu2);
// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }
// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};
// console.log(stringBag, numberBag);
// #### genric class ####
class Storage {
    items = [];
    addItems(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index]; // !:-  non-null assertion operator to indicate that the item will exist at the given index
    }
}
const names = new Storage();
names.addItems("Rahul");
names.addItems("Aman");
names.addItems("Rohan");
console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3
