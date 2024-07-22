// 3.1 Objects ---------------------------------------------------------------------------------------------

// Object Literals
console.log("OBJECT LITERALS");
// 3.1.1
let oven = { // Object Literal
    brand: "Samsung", // 'brand' is the key and "Samsung" is the value
    temperature: 375,
    color: "Silver",
    preheat: function(new_temperature) { 
        this.temperature = new_temperature;
    }
}

console.log(oven); // using console.log() on an object prints out the object literal in a JSON (JavaScript Object Notation) format



// Object Properties
console.log("\nOBJECT PROPERTIES");
// 3.1.2
console.log("Oven temperature is " + oven.temperature); // Output: "375"
oven.preheat(400);
console.log("Oven temperature is " + oven.temperature); // Output: "400"

oven.num_racks = 2; // Adds the 
console.log("This oven has " + oven.num_racks + " racks");



// Iterating Over Objects
console.log("\nITERATING OVER OBJECTS");
// 3.1.3
for (let key in oven) {
    console.log(key); // Output: brand, temperature, color, preheat, num_racks
}



// 3.2 Objects ---------------------------------------------------------------------------------------------

// Array Literals
console.log("\nARRAY LITERALS");
// 3.2.1
let fruits = ['Apple', 'Banana', 'Cherry']; // initializes an array named "fruits", containing 3 elements
console.log(fruits);



// Array Elements
console.log("\nARRAY ELEMENTS");
// 3.2.2
console.log(fruits[0]); // Output: "Apple"
console.log(fruits[2]); // Output: "Cherry"

// 3.2.3
fruits[2] = 'Orange'; // replaces the element at index 2 with 'Orange'
console.log(fruits); // Output: "Orange"

// 3.2.4
fruits.push('Watermelon'); // Adds 'Watermelon' to the end of the array
fruits.unshift('Grapes'); // Adds 'Grapes' to the beginning of the array
console.log(fruits);



// Array Methods
let numbers = [1, 2, 3, 4, 5];
let unsortedNumbers = [152, 34, 900, 17, 1, 88, 577];


// map()
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// filter()
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]


// reduce()
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Outpute: 15 (1 + 2 + 3 + 4 + 5)


// find()
let firstOdd = unsortedNumbers.find(function(num) {
    return num % 2 == 1;
});
console.log(firstOdd); // Output: 17


// findIndex()
let firstOddIndex = unsortedNumbers.findIndex(function(num) {
    return num % 2 == 1;
});
console.log(firstOddIndex); // Output: 3


// some()
let hasNegative = numbers.some(function(num) {
    return num < 0;
});
console.log(hasNegative); // Output: false


// every()
let allPositive = numbers.every(function(num) {
    return num > 0;
});
console.log(allPositive); // Output: true


// sort()
unsortedNumbers.sort(function(a, b) {
    return a - b; // sorts numerically
})
console.log(unsortedNumbers); // Output: [1, 17,  34, 88, 152, 577, 900] (now sorted)



// Iterating over Arrays
console.log("\nITERATING OVER ARRAYS");

let array = [1, 2, 3, 4, 5];


// 3.2.5
// for Loop
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


// 3.2.6
// forEach()
array.forEach(function(element) {
    console.log(element);
});


// 3.2.7
// let...of
for (let element of array) { // What happens if you do 'in' instead of 'of'? Try it and see!
    console.log(element);
}