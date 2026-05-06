// ### USE OF PROMISE ###

/*function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});*/

/*async function getdata(){
    return await new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve("data recived");
        }, 2000);
    });
}
async function showdata() {
    const data = await getdata();
    console.log(data);   
}
 showdata()


//  ### ASYNC AND AWAIT ###

async function out() {
    const sum =2+2;
    return await new Promise(function(resolve, reject){
        if(2<3){
            setTimeout(function(){
                resolve("DATA RESOLVE")
            },2000);
        } else{
            reject("NOT WORKING")
        }
    }); 
}
async function show() {
    const result = await out();
    console.log(result);
}
show()*/

// ### setTimeout and clearTimeout ###


// setTimeout(() => {
//     console.log("Data received");
//  }, 5000);

// const time = setTimeout(function(){
//     console.log("DATA RECIVED");
// },2000);
// console.log("test");
// clearTimeout(time);


// ### setInterval and clearIntreval ###
 
// setInterval(() => {
//      console.log("Checking for new data...");
//  }, 3000);
 
const a= setInterval(function(){
    console.log("checking for new data ");
}, 3000);
console.log("try")
clearInterval(a)




/*function getData(){
    return new Promise( function (resolve, reject){
        if (true){
            resolve("Success!");   
        }
        else {
            reject("Error!");
        }
    });
};


getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Aaryan " + d.title)))
    .then(data => console.log(data.join("\n")))
    .catch(error => console.error("Error fetching data:", error));*/


//  ### ASYNC AND AWAIT ###

 /*async function get(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");  // cursure is blocked in this line
    data = await res.json();
    let c= data.filter(function(d){
        return d.id %2==0;
    });
    let ch = c.map(function(d){
        return ("rahul" + d.title);
    });
    return ch;
 }

async function show() {
    const data = await get();
    console.log(data.join("\n"));
}

show()*/

// async function getTodos(url) {
//     let re = await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor is blocked in this line
//     data = await re.json();
//     return data;
// }
 
//  getTodos().then(data => console.log(data));


// ### JSON.stringify() ###

/*const obj = {
    name: "Aaryan",
    age: 25,
    city: "New York"
}

console.log(obj);
console.log(JSON.stringify(obj)); // onbject => string
console.log(JSON.parse('{"name":"Aaryan","age":25,"city":"New York"}')) // string => object
*/