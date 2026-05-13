// // 1. The Generic API Wrapper


// // Scenario:-  You need a reusable function to fetch data that automatically types the response.
// // Task:-  Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, 
// // and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.

// interface Album{ 
//     uerId: number;
//     id: number;
//     title: string;
// }

// async function fetchdata<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//     if (!response.ok){
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data: T = await response.json();
//     return data;
// }

// async function testFetchData() {
//     const url = "https://jsonplaceholder.typicode.com/albums/1";   
//     const album = await fetchdata<Album>(url);
//     console.log(album);
// }

// testFetchData();


// // 2. Record Mapping for Configuration

// // Scenario:-   You are managing feature flags or permissions for specific user roles.
// // Task:-   Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be 
// //          mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.

// enum Role {
//     Admin = "Admin",
//     Editor = "Editor",
//     Guest = "Guest"
// }

// type PermissionMap = Record<Role, boolean>;

// const permissions: PermissionMap = {
//     [Role.Admin]: true,
//     [Role.Editor]: false,
//     [Role.Guest]: false
// }

// function hasPermission(role: Role): boolean {
//     return permissions[role];
// }

// console.log("Admin has permission: ", hasPermission(Role.Admin));
// console.log("Editor has permission: ", hasPermission(Role.Editor));
// console.log("Guest has permission: ", hasPermission(Role.Guest));



// 3. Exhaustiveness Checking (The never Type)

// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.

// // Task:
// // 1- Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// // 2- Write a function handleTask(status: TaskStatus) using a switch statement.
// // 3- In the default case, assign the status to a variable of type never.
// // 4- The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

// type TaskStatus = 'Open' | 'InProgress' | 'Closed';

// function handleTask(status: TaskStatus){
//     switch(status){
//         case "Open":
//             console.log("Task is open");
//             break;
//         case "InProgress":
//             console.log("task is inprocess")
//             break;
//         case "Closed":
//             console.log("Task is closed");
//             break;
//         default:
//             const neverStatus: never = status;
//             throw new Error(`Unhandled task status: ${neverStatus}`);
            
//     }
// }


// const statuses: TaskStatus[] = ['Open', 'InProgress', 'Closed'];

// for (const s of statuses) {
//   handleTask(s);
// }



// // 4. Recursive Navigation Type
// // Scenario:- You are building a tree structure for a file system or a sidebar menu.
// // Task:- Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional 
// //        subFolders property, which is an array of FolderNode objects.


// type FolderNode = {
//     name: string;
//     files?: string[];
//     subFolders?: FolderNode[];
// }

// const myfolder: FolderNode = {
//     name: "mydocs",
//     files: ["adhar.jpg", "pan.jpg"],
//     subFolders:[
//         {
//            name: "college",
//            files:["marksheet", "provisonal"] 
//         }
//     ]
// };

// async function printfolder(folder: FolderNode,ini: string = ""): Promise<void> {
//     console.log(ini + folder.name);

//     if(folder.files){
//         for(const file of folder.files){
//             console.log(ini + "  "+ file)
//         }
//     }

//     if(folder.subFolders){
//         for( const subfile of folder.subFolders){
//             printfolder(subfile, ini + "  ");
//         }
//     }
// }
// printfolder(myfolder);


// // 5. Template Literal Types for CSS

// // Scenario:-  You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// // Task:-      Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). 
// //             Use Template Literal Types to ensure a number must precede the unit.


// type MarginValue = `${number}px`|`${number}rem`|`${number}vh`;

// const margin1 : MarginValue = "10px";
// const margin2 : MarginValue = "2rem";
// const margin3 : MarginValue = "5vh";

// console.log(margin1);
// console.log(margin2);
// console.log(margin3);

// // 6. Conditional Types & the infer Keyword
// // Scenario:-  You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
// // Task:-      Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the
// //             type the promise resolves to; otherwise, return T itself.


// type UnwrapPromise<T> = T extends Promise<infer U> ? U:T;

// type A = UnwrapPromise<Promise<string>>; // string
// type B = UnwrapPromise<number>; // number

// async function test(): Promise <string | number>{

//     return "Rahul";
// }
// type C = UnwrapPromise<ReturnType<typeof test>>; // string

// test().then(result => {
//     console.log("Result from test function: ", result);
// })


// // 7. The Union Manipulation Puzzle

// // Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// // Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// // 1- Use Extract to create MouseEvents (only click and dbclick).
// // 2- Use Exclude to create NonFormEvents (everything except submit and reset).

// type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

// type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>; // "click" | "dbclick"

// type NonFormEvent = Exclude<AllEvents, 'submit' | 'reset'>; // "click" | "dbclick" | "keypress"


// const mouseEvent: MouseEvents = "click";
// const nonFormEvent: NonFormEvent = "keypress";

// console.log("Mouse Event: ", mouseEvent);
// console.log("Non-Form Event: ", nonFormEvent);


// // 8. Async Higher-Order Function (HOF)
// // Scenario: You want to wrap any asynchronous function with a standard error logger.
// // Task:-  Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, 
// //         when called, executes the original function inside a try/catch block and returns null if it fails.


// function safeExecute<T>(ra: () => Promise<T>): () => Promise<T | null> {
//     return async function(){
//         try{
//             return await ra();
//         }catch(error){
//             console.error("Error executing function: ", error); 
//             return null;
//         }
        
//     };
// }

// async function getData(): Promise<string> {
//   if (Math.random() > 0.5) {
//     throw new Error("Random failure!");
//   }
//   return "Aman";
// }

// // Wrap with safeExecute
// const safeGetData = safeExecute(getData);

// // Test
// (async () => {
//   const result = await safeGetData();
//   console.log("Result:", result); // Either "Aman" or null
// })();


// // 9. Index Signatures for Dynamic Metadata
// // Scenario:-  You are receiving a "Metadata" object from a server where the keys are dynamic strings, but the values must be either
// //             a string, number, or boolean.
// // Task:-      Create an interface UserMetadata that has a required createdAt: Date but allows any other dynamic string keys as long 
// //             as their values match the union type mentioned.

// interface UserMetadata {
//     createdAt: Date;
//     [key: string]: string | number | boolean | Date; // Index signature for dynamic keys
// }

// const metadata: UserMetadata= {
//     createdAt: new Date(),
//     username: "Rahul",
//     age: 25,
//     isAdmin: true,
//     lastLogin: "2026-05-13",
// }

// for (const key in metadata) {
//     console.log(`${key}: ${metadata[key]}`);
// }


// // 10. Mapped Types with Key Remapping
// // Scenario: You have a data model and need to generate a type for an API response that "prefixes" all the keys.
// // Task:
// // 1- Define an interface Car { make: string; model: string; }.
// // 2- Create a mapped type ApiResponse<T> that iterates through keys of T and renames them to be uppercase and prefixed with DATA_ 
// // (e.g., make becomes DATA_MAKE).

// interface car {
//     make: string,
//     model: string
// }

// type ApiResponse<T> = {
//     [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K]
// }

// type carApi = ApiResponse<car>;

// const response: carApi = {
//     DATA_MAKE: "Toyota",
//     DATA_MODEL: "Corolla"
// }

// console.log(response.DATA_MAKE);  // Toyota
// console.log(response.DATA_MODEL); // Corolla
