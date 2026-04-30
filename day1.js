let a = 5;
let b = 10;

let str = "Hello, World!";

// String operations
console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-5):", str.substring(0, 5)); // 0 - first character, 5 - up to but not including the 5th character

// Mathematical operations
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b); // Remainder (Modulo)

// Logical operations --> bool
console.log("a > b:", a > b); // F
console.log("a < b:", a < b); // T
console.log("a == b:", a == b); // F === Strict equality (checks value and type)
console.log("a != b:", a != b); // T
console.log("a >= b:", a >= b); // F
console.log("a <= b:", a <= b); // T


let obj = {
    name: "Alice",
    age: 30,
    city: "New York"
}
console.log("Object:", obj);
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);

// String str = "Aryan"; int a = 5; boolean b = true;
let str2 = "Aryan";
let a2 = 5;
let b2 = true;

str2 = 23;
console.log("str2:", str2); // str2 is now a number, demonstrating dynamic typing in JavaScript`

function add(a, b) {
    return a + b;
}

console.log("Function add(5, 10):", add(5, 10)); // 15

const c = 5; // final value, cannot be reassigned
// c = 6; // This would cause an error
console.log(c);

let l = 5;
var v = 6;

{
    let l = 10; // This l is block-scoped, different from the global l
    var v = 20; // This v is function-scoped, it will overwrite the global v
    console.log("Inside block, l:", l); // 10
    console.log("Inside block, v:", v); // 20
}

console.log("Outside block, l:", l); // 5
console.log("Outside block, v:", v); // 20
console.log("Outside block, v:", v); // 20

let arr = [1, "Aaryan", 3, true, 5];
let arr2 = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr2.length; i++) {  
//     console.log("Element at index after * 2 ", i, ":", arr2[i] * 2);
// }
// let count = arr2.length - 1;
// while (count >= 0) {
//     console.log("Element at index after * 2 ", count, ":", arr2[count] * 2);
//     count--;
// }

// arr2.forEach(function(x) {
//     console.log("Element after * 2 ", x, ":", x * 2);
// });
// arr2.map(function(x) {
//     console.log("Element after * 2 ", x, ":", x * 2);
// });

let i = 0;
let j = 10;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

// Calendar --> Week --> final (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)

let choice = "a";

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}
// PRACTICE QUESTION
// question 1
// The Swapper: Create two variables, A and B, and assign them numbers. Write a few lines of code to swap their values so that A gets B's value and vice-versa.
let num1 = 5;
let num2= 10;
[num1,num2]= [num2,num1];
console.log("num1=", num1, "num2=", num2);

//Question 2
//TYPE CHEAKER Write a function that takes one input and console.log's a message saying "This is a number" or "This is a string" based on the data type provided.
function see(input){
    
    if (typeof input=== "number"){
        console.log("this is a number");
    } else if (typeof input ==="string"){
        console.log("this is a string");   
    } else{
        console.log("this is neither a number nor a strings");
    }
}

see("rahul");
see(55);


//Question no 3
//Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD".
let fullName = "john Deo"

let NameArray = fullName.split(" "); // Result: ["John", "Doe"]

let firstInitial = NameArray[0][0]; // "J"
let lastInitial = NameArray[1][0];  // "D"

let finalresult = firstInitial + lastInitial;

console.log("THE FINAL STRING IS :- ", finalresult); // "JD"


//Question no-4
//The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.
let messy = " Javascript is fun "
messy.trim().toLowerCase();
console.log(messy.trim().toLowerCase());


// QUESTION NO :-5
//The Grocery List: Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added.
let cart =["bread", "apple","jam"];
cart.push("milk");
cart.unshift("eggs");
cart.pop();
console.log(cart);

// QUESTION NO -6
//Value Finder: Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exists in the array (returning true or false) and another line to find the index of the number 50.
let numbers = [10, 20, 30, 40, 50]
let exists = numbers.includes(30);
let index = numbers.indexOf(50);
console.log("the number 30 exists", exists)
console.log("th index of  number 50 :- ", index)