// // ## CAT FACTS

// fetch("https://catfact.ninja/facts")
//     .then(res => res.json())
//     .then(result => result.data) // get an array
//     .then(facts => facts.filter( f => f.length <50)) // filter the facts that is less then 50 words
//     .then(facts =>facts.map(f => f.fact))
//     .then(data => console.log(data))
//     .catch(err => console.log("erroe;", err))

// async function cat() {
//     let url = await fetch("https://catfact.ninja/facts");
//     let d = await url.json();
//     let f  = d.data.filter(function(d){
//         return( d.length<50);
//     })
//     let r =  f.map(function(d){
//         return d.fact;

//     });
//     return r;
// }

// async function result() {
//     const h= await cat();
//     console.log(h.join("\n"));
// }

// result()
// //2) Pokémon — PokeAPI

// fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//     .then(res => res.json())
//     .then(acc=> acc.results)
//     .then(arr => arr.filter(f => f.name.startsWith("p") ))
//     .then(newarr => newarr.map(f => f.name))
//     .then(console.log);

// async function pokemon() {
//     const link = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//     const res = await link.json();
//     let da = res.results.filter(function(f){
//         return(f.name.startsWith("p"));
//     });
//     let newarr = da.map(function(h){
//         return h.name
//     });
//     return newarr;
// }

// async function re() {
//     const j = await pokemon()
//     console.log(j.join("\n"));
// }
// re()

//   //3 Space People — Open Notify
//   fetch("http://api.open-notify.org/astros.json")
//     .then(r => r.json())
//     .then(obj => obj.people)
//     .then(arr => arr.map(p => p.name))
//     .then( names => console.log(names.join("\n")));

// async function space() {
//     const link = await fetch("http://api.open-notify.org/astros.json")
//     const hh = await link.json();
//     let da = hh.people.map(function(s){
//         return s.name
//     })
//     return da
// }

// async function k() {
//     const g = await space()
//     console.log(g.join("\n"))
// }
// k()

// 4Quotes — Quotable
//  fetch("https://zenquotes.io/api/quotes")
//     .then(r => r.json())
//     .then(arr => arr.filter(q => q.q.length < 100))
//     .then(arr => arr.map(q => q.q))
//     .then(names => console.log(names.join("\n")))
//     .catch(console.error);

// async function aa() {
//     const key = await fetch("https://zenquotes.io/api/quotes");
//     const n= await key.json()
//     let l= n.filter(function(o){
//         return (o.q.length<100);
//     });

//     let j= l.map(function(a){
//         return a.q;
//     });
//     return j;

// }

// async function k() {
//     const g = await aa()
//     console.log(g.join("\n"));
// }
// k()


//   //5. Universities — Hipolabs Universities API
// fetch("http://universities.hipolabs.com/search?country=India")
//     .then(r => r.json())
//     .then(arr => arr.filter(u => u.name.includes("Technology")))
//     .then(arr => arr.map(u => u.name))
//     .then(console.log);

// async function aa() {
//     const key = await fetch("http://universities.hipolabs.com/search?country=India");
//     const n= await key.json()
//     let l= n.filter(function(o){
//         return (o.name.includes("Technology"));
//     });

//     let j= l.map(function(a){
//         return a.name;
//     });
//     return j;

// }

// async function k() {
//     const g = await aa()
//     console.log(g.join("\n"));
// }
// k()


//  // 6.Dog Facts — Dog API
// fetch("https://dogapi.dog/api/v2/facts")
//   .then(r => r.json())
//   .then(obj => obj.data)
//   .then(arr => arr.map(d => d.attributes.body))
//   .then(console.log);

// async function aa() {
//     const key = await fetch("https://dogapi.dog/api/v2/facts");
//     const n= await key.json()
    
//     let j= n.data.map(function(a){
//         return a.attributes.body
//     });
//     return j;

// }

// async function k() {
//     const g = await aa()
//     console.log(g.join("\n"));
// }
// k()

//   //7.Crypto — CoinGecko
// fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
//   .then(r => r.json())
//   .then(arr => arr) // already array
//   .then(arr => arr.filter(c => c.current_price > 1000))
//   .then(arr => arr.map(c => c.name))
//   .then(console.log);

//   //8.Random Users — Random User Generator
// fetch("https://randomuser.me/api/?results=10")
//   .then(r => r.json())
//   .then(obj => obj.results)
//   .then(arr => arr.filter(u => u.gender === "female"))
//   .then(arr => arr.map(u => u.name.first))
//   .then(console.log);

//   //9Countries — REST Countries
// fetch("https://restcountries.com/v3.1/all?fields=name,population")
//   .then(r => r.json())
//   .then(d => Array.isArray(d) ? d : [])
//   .then(a => a.filter(c => c.population > 100000000))
//   .then(a => a.map(c => c.name.common))
//   .then(console.log)
//   .catch(console.error);

// //   //10.Books — Open Library
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(r => r.json())
//   .then(a => a.filter(p => p.userId === 1))
//   .then(a => a.map(p => p.title))
//   .then(console.log)
//   .catch(console.error);