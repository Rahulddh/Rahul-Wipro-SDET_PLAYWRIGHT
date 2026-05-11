const message = "Hello TypeScript";
console.log(message);

const name : string = "Hello Rahul";
console.log(name);

let result: number| string;
result = 10;
result = "pass";
console.log(result);
function add(a: number, b: number): number {
    return "Sum: " + (a + b);
}
 
console.log(add(5, 10));