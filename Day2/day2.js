let a= "Rahul";
let b= "Rohit";
let c= "Mohit";
 
let d= "hello " + a +", "+ b + " and " +c + "!";
//console.log(d);
let e = `hello ${a}, ${b} and ${c} !`;
let f= `The Length of a ${a.length *2}`;
//console.log (f)
//console.log(e);

function table(num){
    let result = "";
    for(let i = 1; i <= 10; i++){
        //console.log(num + " x " +i +" = " + (num * i))
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
//console.log(table(5)); // display the table of 5


/*function sum (a,b) {
    return a+b;
}
let sum1 = sum(5,10);
console.log(sum1);*/

let sum =(x,y) => x+y;
console.log("sum of 5 and 10: ", sum(5,10));


let arr = [1,2,3,4,5," Rahul"];

/*arr.filter(function(x){
    return typeof x === "number";
}).map(function(y){
    return y * 2;
}).forEach(function(abc){
    console.log("element after * 2:", abc * 2);
});*/

arr.filter(x=> typeof x === "number").map(y => y * 2).forEach(abc => console.log("element after * 2:", abc * 2));

//console.log(arr.find(x =. x === "Rahul"));
// Arrow function is represented by =>
console.log(Math.random()); // 0-1
console.log(Math.random()* 10); // 0-10

console.log(Math.floor(Math.random() * 10)); // 0-10
// floor -> rounds down to the nearest integer
console.log(Math.floor(Math.random() * 10)+1); // 1-10
console.log(Math.ceil(0.9)); //only give high value,  round upper to the nearest integer


// ==/===
//console.log(5 =='5'); //true
//console.log(5 ==='5'); //faluse

let ss= "5";
console.log(Number(ss)); //5
console.log(String(5)); //"5"

let val = 0.6;
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6
// floor give int - low int, parseint give string - int

let colors = ["red", "green", "blue"];
console.log(colors.indexOf("green")); //1
console.log(colors.indexOf("yellow")); //-1, because it is not present in it.
console.log(colors.includes("yellow")); //false
console.log(colors.length); //3
console.log(colors[0]); //red
console.log(colors[colors.length -1]); //blue
colors.push("yellow"); // add yellow to colors
console.log(colors); //["red", "green", "blue", "yellow"]
colors.pop();
console.log(colors); //["red", "green", "blue",]
colors.unshift("purple"); // add purpule in the beginning of array
console.log(colors);//["purple","red", "green", "blue"]
colors.shift(); // remove the first elemnet from the array
console.log(colors);//["red", "green", "blue"]


