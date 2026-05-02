//DAY-2
// PRACTICE QUESTION
//QUESTION NO-1
/*Goal: Practice Template Literals and Array Methods.
Write a function called formatGuests that takes an array of names. The function should:
Remove the first name from the list (it’s the host, not a guest).
Add "Guest: " before each remaining name using .map().
Return a single string where each guest is on a new line.*/


function formatGuests() {
    let names = ["Rahul", "Anita", "Vikram", "Sonia"];
    names.shift();
    let guestList = names.map(name => `Guest: ${name}`);
    return guestList.join("\n");
}

console.log(formatGuests());


//QUESTION NO-2
/*Question 2: The Logic Gate (Filter & Math)
Goal: Practice Arrow Functions, filter, and Math methods.
Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
Filter the array to keep only the numbers.
Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
Return the final array.*/

const getHighNumbers = (arr) => {
    let random = Math.floor(Math.random() * 50) + 1;

    return arr
        .filter(x => typeof x === "number")
        .filter(x => x > random);
};
console.log(getHighNumbers([10, "apple", 20, 30, "banana", 40, 50]));

    

//QUESTION NO-3
/*Question 3: The Price Calculator
Goal: Practice Type Conversion and splice.
You have an array of prices, but they are currently strings. Write a script that:
Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
Converts the remaining string prices into actual numbers.
Calculates the sum of those numbers using an arrow function.
Prints: "Total Price: $[sum]" using a template literal.*/


let prices = ["100", "200", "300", "50"]; // last one is handling fee
let handlingFee = prices.splice(prices.length - 1, 1)[0];
let numericPrices = prices.map(price => Number(price));
let sum = numericPrices.reduce((acc, curr) => acc + curr, 0);
console.log(`Total Price: $${sum}`);
console.log(`Handling Fee (separate): $${handlingFee}`);
