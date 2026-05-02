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
