// // 1. Variables & Data Types

// // 1. Create a program that swaps two numbers without using a third variable.

let a= 5;
let b= 10;
[a,b]= [b,a];
console.log("a: ", a);
console.log("b: ", b);


// // 2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.

let x= "Rahul";
if (typeof x === "number"){
    console.log("x is a number");
} 
else if (typeof x === "string"){
    console.log("x is a string");
}
else if (typeof x === "boolean"){
    console.log("x is a boolean");
}
else if (typeof x === "null"){
    console.log("x is a null");
}
else if (typeof x === "undefined"){
    console.log("x is a undefined");
}

// // 3. Convert temperature from Celsius to Fahrenheit using variables.

let celsius= 24;
let Fahrenheit = celsius*(9/5)+32;
console.log("Temperature in Fahrenheit: ", Fahrenheit);

// // 4. Create a simple calculator using variables and arithmetic operators.

let num1= 10;
let num2= 5;
console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);

// // 5. Write a program that takes a user’s birth year and calculates age.

let bornyear= 2003;
let currentyear=2026;
let age = currentyear- bornyear;
console.log(age)


// // #### 2. Strings ####

// // 1. Reverse a string without using built-in reverse methods.


let str= "Rahul Ranjan";
let reverse = "";
for ( let i = str.length - 1; i>=0; i--){
    reverse += str[i];
}
console.log("original string: ", str);
console.log("reversed string: ", reverse);


// // 2. Count the number of vowels in a given string.

// let str1= "Rahul Ranjan";
// let vowels = "aeiouAEIOU";
// let count= 0;
// for (let char of str1){
//     if (vowels.includes(char)){
//         count++
//     }
// }

// console.log("vowels in Str1", count);


// let str1= "Rahul Ranjan";
// let count= 0;
// for (let char of str1.toLowerCase()){
//     if ("aeiou".includes(char)){
//         console.log(char);
//         count++;
//     }
// }
// console.log("vowels in Str1", count);


// // 3- Check whether a string is a palindrome.

// let string = "racecar";
// let reverse = "";
// for (let i = string.length - 1; i>=0; i--){
//     reverse += string[i];
// }
// if (string === reverse){
//     console.log("it is a palindrome");
// }
// else{
//     console.log("it is not a palindrome");
// }

// // 4. Capitalize the first letter of every word in a sentence.

// let sentence = "hello world from javascript";
// let words = sentence.split();
// for (let i=0; i< words.length; i++){
//     words[i] = words[i].replace(words[i][0], words[i][0].toUpperCase());
// }
// console.log(words.join());


// // 5. Find the longest word in a sentence.

// let sentence = "hello world from javascript";
// let words = sentence.split(" ");

// let longestword = "";

// for (let word of words ){
//     if(word.length> longestword.length){
//         longestword = word;
//     }
// }
// console.log(sentence);
// console.log("Longest word: ", longestword);


// // ####   3. Numbers & Math  ####
// //1. Generate a random number between 1 and 100.


// let number = Math.random()*100+1;
// console.log("Random number between 1 and 100: ", Math.floor(number));


// //2. Check whether a number is prime.

// function isprime(num){
//     if (num <= 1){
//         return num + " is not a prime number";
//     }
//     for ( i=2; i<Math.floor(Math.sqrt(num))+1; i++){
//         if( num %i ==0){
//             return num + " is not a prime number";
//         }
//     }
//     return num + " is a prime number";
// }

// console.log( isprime(29));


// // 3. Find factorial of a number using loops.

// function fact(num){
//     factor = [];
//     for (i=1; i<=num; i++){
//         if (num % i ==0){
//             factor.push(i);
//         }
//     }
//     console.log(factor)
// }
// fact(88)

// // 4. Find Fibonacci series up to n numbers.

// function fibonacci(n){
//     let a= [0,1];
//     for (let i=1; i<=n ; i++){
//         a.push(a[i]+ a[i-1])
//     }
//     console.log(a)
// }

// fibonacci(10)


// //5. Check whether a number is Armstrong number.

// function arms(num){
//     let sum = 0;
//     for(let i=0; i< num.length; i++){
//         sum = sum + Math.pow(num[i], num.length);
//     }
    
//     if (sum == num){
//         console.log(num + " is an Armstrong number");
//     }
//     else{
//         console.log(num + " is not an Armstrong number");
//     }
// }
// arms('465')

// // 4. Arrays


// // 1. Find the largest and smallest number in an array.

// let arr= [3, 5, 1, 8, 2];
// let largest = Math.max(...arr);
// let smallest = Math.min(...arr);
// console.log("largest number: ", largest);
// console.log("smallest number: ", smallest);

// using loop method
// let arr= [3, 5, 1, 8, 2];
// let largest = arr[0];
// let smallest = arr[0];
// for (let i=1; i<arr.length; i++){
//     if( largest< arr[i]){
//         largest= arr[i];
//     }
//     if (smallest > arr[i]){
//         smallest = arr[i];
//     }
// }
// console.log("largest number: ", largest);
// console.log("smallest number: ", smallest);

// using reduce method


// let arr = [10, 5, 20, 3, 42];

// let max = arr.reduce((a, b) => a > b ? a : b);
// let min = arr.reduce((a, b) => a < b ? a : b);

// console.log("Largest:", max); 
// console.log("Smallest:", min);

// // 2. Remove duplicate elements from an array.

// using Set() method

// let arr= [1, 2, 3, 2, 4, 1, 5];
// let unique = [...new Set(arr)];
// console.log("unique elements: ", unique);

//using reduce method

// let arr= [1, 2, 3, 2, 4, 1, 5];
// let unique = arr.reduce((acc, curr) => {
//     if(!acc.includes(curr)){
//         acc.push(curr);
//     }
//     return acc;
// }, [])

// console.log("unique elements: ", unique);

// using filter method

// let arr = [1, 2, 3, 2, 4, 1, 5];
// let unique= arr.filter(function(value,index){
//     return (arr.indexOf(value)=== index)
// })
// console.log(unique);

// 3. Sort an array without using built-in sort().



// // 4. Find second largest number in an array.

//let arr= [65,32,87,45,3,77,12];
// let sorted= arr.sort((a,b) => b-a);
// console.log("sorted array: ", sorted);
// console.log("second largest number: ", sorted[1]);

// // 5. Merge two arrays and remove duplicates.

// let arr1= [1, 2, 3, 4];
// let arr2= [3, 4, 5, 6];
// let merge =[...arr1, ...arr2];
// // let unique = merge.reduce((acc,cum)=> {
// //     if(!acc.includes(cum)){
// //         acc.push(cum);
// //     }
// //     return acc;
// // }, [])
// let unique =[ ...new Set(merge)];
// console.log(merge);
// console.log(unique);

// #### 5. Objects  ####
// 1. Create an object for a student and display all properties dynamically.

// let student = {
//     name: "Rahul",
//     age: 21,
//     rollNo: 101,
//     course: "Computer Science",
//     grade: "A"
// };
// console.log(student);
// for(let i in student){
//     console.log( i + ":" + student[i])
// }

// // 2. Count number of keys in an object.
// let student = {
//     name: "Rahul",
//     age: 21,
//     rollNo: 101,
//     course: "Computer Science",
//     grade: "A"
// };
// let count=0;
// for (let i in student){
//     count++;
// }
// console.log("number of keys in student object: ", count);

// using Object.keys() method
// let count = Object.keys(student).length;
// console.log("number of keys in student object: ", count);

// // 3. Merge two objects into one.

// let obj1 = {
//     name: "Rahul",
//     age: 21
// };

// let obj2 = {
//     rollNo: 101,
//     course: "Computer Science",
//     grade: "A"
// };
//  let mer = {...obj1,...obj2}
//  console.log(mer) 

// //  4. Convert an object into an array of keys and values.

// let student = {
//     name: "Rahul",
//     age: 21,
//     rollNo: 101,
//     course: "Computer Science",
//     grade: "A"
// };

// let arr= Object.entries(student)
// console.log(JSON.stringify(arr));


// // 5. Create a shopping cart object and calculate total bill amount.


// let shoppingCart = [
//         { name: "Apple", price: 30, quantity: 3 },
//         { name: "Banana", price: 10, quantity: 6 },
//         { name: "Milk", price: 50, quantity: 2 },
//         { name: "Bread", price: 25, quantity: 1 }
//     ]
// // calculate total bill amount
// let totalbill = shoppingCart.reduce((total, item)=>{
//     return total + (item.price * item.quantity);
// }, 0);
// console.log("Total bill amount: ", totalbill);


// ####  6. Loops  ####

// 1. Print star pyramid patterns.

// let row =5;
// for (i=0; i<=5; i++){
//     console.log("*".repeat(i));
// }

// // 2. Print multiplication tables from 1 to 10.

// for(let i=1; i<=10; i++){
//     for (let j=1; j<=10; j++){
//         console.log(i + " x " + j + " = " + (i*j));
//     }
//     console.log("------------------");
// }


// // 3. Find sum of all even numbers between 1 and 100.

// let sum= 0
// for(let i=1; i<=100; i++){
//     if(i%2==0){
//         sum +=i;
//     }
    
    
// }
// console.log("sum of even numbers between 1 and 100: ", sum);

// //4. Print all prime numbers between 1 and 100.

// prime= [];
// for (let i=2; i<=100; i++){
//     let isprime = true;
//     for( let j=2; j<= Math.sqrt(i); j++){
//         if (i%j==0){
//             isprime = false;
//             break;
//         }
        
//     }
//     if(isprime){
//         prime.push(i);
//     } 
// }
// console.log("prime numbers between 1 and 100: ", prime);


// // 5. Create a number guessing game using loops.

// function guessNumber(input){
//     let random = Math.floor(Math.random()*100 +1);
//     if (input == random){
//         console.log("Congratulations! You guessed the number.");
//     }
//     else {
//         console.log("Sorry, the correct number was: ", random);
//     }
// }

// guessNumber(55);


// //  ####  7. Functions ####


// // 1. Create a function that returns the greatest of three numbers.

// // function greatest(a,b,c){
// //     let max = Math.max(a,b,c);
// //     return max;
// // }

// // console.log("greatest of 5, 10 and 3: ", greatest(5,10,3));


function greatest(a,b,c){
    if (a>b && a>c){
        console.log(a);
    }
    if (b>a && b>c){
        console.log(b);
    }
    if (a==c && a==b){
        console.log("all numbers are equal");
    }
    if (c>a && c>b){
        console.log(c);
    }
}
greatest(5,5,5);

// //2. Write a function to check whether a number is palindrome.

// function isPalindrome(str){
//     let reverse = "";
//     for(i = str.length -1; i>=0; i--){
//         reverse+= str[i];
//     }
//     if (str === reverse){
//         console.log(str + " is a palindrome");
//     }
//     else{
//         console.log(str + " is not a palindrome");
//     }
// }

// isPalindrome("madam");