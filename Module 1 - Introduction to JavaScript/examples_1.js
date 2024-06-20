// 1.0 Print Statements ---------------------------------------------------------------------------------------------

console.log("Hello World") // prints "Hello World" to the console

// 1.1 Variables and Constants --------------------------------------------------------------------------------------

let name = "John"; // Declaring a variable 'name' and assigning it a string value "John".
const PI = 3.14; // Declaring a constant PI with a value of 3.14.

// 1.2 Primitive Data Types ---------------------------------------------------------------------------------------------------

let num = 30; // Number
let message = "Hello, world!"; // String
let isStudent = true; // Boolean
let firstName; // Undefined
let car = null; // Null

// 1.3 Operators ----------------------------------------------------------------------------------------------------

// Arithmetic Operators
let sum = 10 + 5; // 15, Addition
let difference = 10 - 5; // 5, Subtraction
let product = 10 * 5; // 50, Multiplication
let quotient = 10 / 5; // 2, Division
let remainder = 10 % 3; // 1, Modulus (remainder)

// Assignment Operators
let x = 10;
x += 5; // Equivalent to: x = x + 5;

// Comparison Operators
let a = 10;
let b = 5;
let c = "10";
console.log(a > b); // true
console.log(a == c); // true
console.log(a === c); // false

// Logical Operators
let isAdult = true;
let hasLicense = false;
console.log(isAdult && hasLicense); // false (Logical AND)


// 1.4 Control Structures -------------------------------------------------------------------------------------------

// Conditional Statements
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
} // Output: "You are an adult"

let grade = 85;
if (grade >= 90) {
    console.log("Your grade is an A");
} else if (grade >= 80) {
    console.log("Your grade is a B");
} else if (grade >= 70) {
    console.log("Your grade is a C");
} else if (grade >= 60) {
    console.log("Your grade is a D");
} else {
    console.log("Your grade is an F")
} // Output: "Your grade is a B"

// Loops
// Example 1.4.1
for (let i = 0; i < 5; i++) {
    console.log(i); 
} // Output: 0, 1, 2, 3, 4

let number = 2;
while (number < 100) {
    console.log(number)
    number *= 2;
} // Output: 2, 4, 8, 16, 32, 64

// 1.5 Functions ----------------------------------------------------------------------------------------------------

// Function Declarations
function greet() {
    console.log("Hello!")
}

// Example 1.5.1
function add(a, b) {
    return a + b;
}

// Function Call
greet(); // Output: "Hello!"
let sum1 = add(10, 20); // calling the function add, with a = 10 and b = 20 and assigning its output to sum1
let sum2 = add(5, 5); // calling the function add, with a = 5 and b = 5 and assigning its output to sum2
console.log(sum1); // Output: 30
console.log(sum2); // Output: 10