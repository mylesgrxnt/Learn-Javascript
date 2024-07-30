// Practice Problems:
// TODO: print "Hello World!" to the console.

console.log("Hello World");

// TODO: Use a for loop to sum the numbers 1 through 10.

let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;
}
console.log(sum);

// TODO: Using conditional statements, given the year, month, and day of someone's birth, evaluate if they are 21 or older.
let year = 2003;
let month = 8;
let day = 16;

if (year > 2003) {
    console.log("Not 21+");
} else if (month > 7) {
    console.log("Not 21+");
} else if (day > 25) {
    console.log("Not 21+");
} else {
    console.log("21+");
}

// TODO: Using appropriate constants, write a function that takes the radius of a circle as a parameter, then returns the area of that circle.

const pi = 3.1415;
function area_calc(r) {
    return (pi * r * r);
}

console.log(area_calc(5));