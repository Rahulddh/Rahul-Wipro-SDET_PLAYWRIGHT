function getData() {
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
});
 /*setTimeout(() => {
     console.log("Data received");
 }, 5000);
 
setInterval(() => {
     console.log("Checking for new data...");
 }, 3000);*/
 

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





    fetch("https://api.restful-api.dev/objects/4")
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
 .then(data => console.log(data))
 .catch(err => console.error(err));

