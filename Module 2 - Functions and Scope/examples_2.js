// 2.1 Basic Functions ---------------------------------------------------------------------------------------------

// Defining Functions
console.log("DEFINING FUNCTIONS");

function greet() { // 2.1.1
    console.log("Hello!");
}

greet(); // Output: "Hello!"




// Function Parameters
console.log("\nPARAMETERS");
function personal_greeting(name) { // 2.1.2
    console.log("Hello, " + name);
}

personal_greeting("Pete"); // Output: "Hello, Pete"



// Function Scope and Visibility
console.log("\nFUNCTION SCOPE");

let a = "This is a GLOBAL variable"; // This is a gobal variable
function scope_example() { // 2.1.3
    let b = "This is a LOCAL variable"; // This is a local variable

    console.log(a); // Output: "This is a GLOBAL variable"
    console.log(b); // Output: "This is a LOCAL variable"
}
console.log(a); // Output: "This is a GLOBAL variable"
// console.log(b); --> Output: ReferenceError: b is not defined
scope_example();




// Return Values  
console.log("\nRETURN VALUES");

function birth_year(age) { // 2.1.4
    let year_born = 2024 - age;
    return year_born;
}
let year = birth_year(29);
console.log("You were born in " + year); // Output: You were born in 1995




// 2.2 Advanced Functions -----------------------------------------------------------------------------------------

// Arrow Functions
console.log("\nARROW FUNCTIONS");

function add1(a,b) { // 2.2.1
    return a + b;
}
const add2 = (a,b) => {return a + b}
const add3 = (a,b) => a + b
const square = a => a * a
console.log(add1(2,3)); // Output: 5
console.log(add2(2,3)); // Output: 5
console.log(add3(2,3)); // Output: 5
console.log(square(2)); // Output: 4




// Function Closures
console.log("\nFUNCTION CLOSURES");

function outerFunction() { // 2.2.2
    const outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}
const closureExample = outerFunction();
closureExample(); // Output: "I am from the outer function"

function createCounter() { // 2.2.3
    let count = 0;

    function increment() {
        return ++count;
    }

    return increment;
}
const counter1 = createCounter();
console.log(counter1()); // Outputs: 1
console.log(counter1()); // Outputs: 2
const counter2 = createCounter();
console.log(counter2()); // Outputs: 1 (starts fresh for counter2)




// 2.3 Asynchronous Programming ------------------------------------------------------------------------------------

// Promises
console.log("\nPROMISES");

// let promise = new Promise((resolve, reject) => {
//     if (operation successful) {
//         resolve(result);
//     } else {
//         reject(error);
//     }
// });

// promise.then(result => {
//     Handle successful result
// }).catch(error => {
//     Handle error
// }).finally(() =>
//     Do this, regardless of a result or error
// );

let promise = new Promise((resolve, reject) => { // 2.3.1
     // To understand objects go to Module 3
    // Simulating an asynchronous operation (e.g., fetching from a server)
    setTimeout(() => { // setTimeout is a good example of a straightforward asynchronous function that is built into JavaScript, documentation is in links_2.md
        const data = [
            { id: 1, name: 'John Doe', age: 30, occupation: 'Software Engineer' },
            { id: 2, name: 'Jane Smith', age: 25, occupation: 'Data Analyst' }
        ];
        resolve(data); // Resolve with mock data i.e. fulfill the promise
    }, 200); // Simulate a 0.2-second delay
});
console.log("Fetching data..."); // Using the fetchDataFromAPI function
promise.then(data => {
        console.log("Data fetched successfully:", data);
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    })
    .finally(() => {
        console.log("Cleanup or final tasks can be performed here.");
    });

console.log("After fetchDataFromAPI function call, but before data is fetched.");





// Async/Await
async function fetchData() { // 2.3.2
    // Asynchronous operations inside an async function
    let response = await fetch('https://dummyapi.online/api/movies/1');
    let data = await response.json();
    console.log("\nASYNC");
    console.log(data);
}

fetchData();