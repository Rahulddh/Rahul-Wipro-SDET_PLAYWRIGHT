// Warm up

//question number 1
 // logging Names
//Given an array const names = ['Alice', 'Bob', 'Charlie'];, use .forEach() to log each name to the console with the prefix "Hello, ".
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(function(val){
    console.log("hello" , val );
});

// Question 2
//2. Temperature Conversion**
//You have an array of temperatures in Celsius: [0, 10, 20, 30]. Use .map() to create a new array where each temperature is converted to Fahrenheit.
//*(Formula: F = C \times 1.8 + 32)*

const celsius = [0,10,20,30];
/*const f= celsius.map(function(val){
    return( 1.8 * val + 32);
});
console.log(f);*/

const f = celsius.map( val => (1.8 * val + 32));
console.log(f);


/* Question no 3
3. Finding Adults**
Given an array of objects:
const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
Use .filter() to create a new array containing only the users who are 18 or older.*/

const users = [{ name: 'Li', age: 16 }, { name: 'Dan', age: 22 }, { name: 'Sarah', age: 17 }];
/*let newarr = users.filter(function(val){
    return val.age>18; }).map(function(val){
        return val.name;
    });
console.log(newarr);*/

const newarr = users.filter( val => val.age >= 18).map( val =>  val.name );
console.log(newarr);


/* Question no 4
4- String Lengths**
Write a function that takes an array of strings and uses .filter() to return only the strings that have more than 5 characters.
*/
const  a = ["rahuls", "mohit", "asha"];
/*let newa= a.filter(function(val){
    if (val.length >5){
        return val;
    }
})*/
let newa = a.filter( str => str.length>5);

console.log(newa);

/* Qestion 5
Total Cost**
Given an array of prices [19.99, 5.50, 3.99, 25.00], use .reduce() to calculate the total sum of the items.*/
const prices = [19.99, 5.50, 3.99, 25.00];
/*let sum = prices.reduce(function(acc, val){
    return(acc+val);
},0)*/

let sum = prices.reduce((acc, val) => {return (acc+val)},0);

console.log(sum);

/* Question 6
Counting Occurrences**
Use .reduce() to count how many times the word "apple" appears in this array:
['apple', 'banana', 'orange', 'apple', 'grape', 'apple'].*/
 
const fr= ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
 /*let times = fr.reduce(function(acc,val){
    if (val = 'apple'){
        acc[val] = (acc[val] || 0) + 1;
    }
    return acc;
 }, {})*/

 let times = fr.reduce((acc, val) => {
    if (val ==='apple'){
        acc[val] = (acc[val] || 0) + 1;
        
    }
    return acc;
 }, {} )

 console.log(times);

 /* Question no 7
Given an array of numbers [1, 2, 3, 4, 5, 6], use a combination of .filter() and .map() to:
1. Keep only the even numbers.
2. Square those even numbers (e.g., 2 becomes 4, 4 becomes 16).*/

const num = [1, 2, 3, 4, 5, 6];
/*let newnum = num.filter(function (val){
    if( val%2 == 0){
        return val;
    }
})
let square = newnum.map( function(sq){
    return sq*sq;
});*/

let newnum = num.filter( val => val % 2 == 0);
let square = newnum.map(val => val*val);
console.log( newnum);
console.log( square);


/* Question no 8
Object Extraction**
You have an array of "Product" objects:
[{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }]
Use .map() to extract just the titles into a simple array of strings: ['Laptop', 'Mouse'].*/

const product = [{ id: 1, title: 'Laptop' }, { id: 2, title: 'Mouse' }];
 /*let titl = product.map(function(val){
    return val.title;
 })*/


const titl= product.map( product => product.title);
console.log(titl);


/* question no9
Write a short script using .reduce() to find the average score from an array of test results: [80, 90, 70, 100].*/
const results = [80, 90, 70, 100];
/*let avg = results.reduce(function(acc,val){
    return acc + val;
});
let average = avg/ results.length;
console.log(average);*/


const avg = results.reduce((sum, score) => sum + score, 0) / results.length;
console.log(avg);


/* Question no 10
Flattening (The Bonus)**
Without using the built-in .flat() method, use .reduce() to turn this nested array into a single flat array:
[[1, 2], [3, 4], [5, 6]] → [1, 2, 3, 4, 5, 6]*/

const nested = [[1, 2], [3, 4], [5, 6]];

/*const flat = nested.reduce(function(acc, val) {
  return acc.concat(val);   // merge each inner array into accumulator
}, []);*/


const flat = nested.reduce((acc,val) => acc.concat(val), []);
console.log(flat);


