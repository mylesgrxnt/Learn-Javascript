// Practice Problems:
// TODO: Write a function called "temperatureConverter" that takes two parameters: an integer named "temperature" representing the starting temperature, and a boolean named "fahrenheitToCelsius"
// If fahrenheitToCelsius is true, assume temperature is in fahrenheit and return the temperature converted into celsius,
// Else assume temperature is in celsius and return the temperature converted into fahrenheit

function temperatureConverter(temperature, fahrenheitToCelsius) {
    if (fahrenheitToCelsius) {
        return ((temperature - 32) * (5/9));
    } else {
        return ((temperature * (9/5)) + 32);
    }
}

console.log(temperatureConverter(100, false)); // Output: 212
console.log(temperatureConverter(32, true)) // Output: 0

// TODO: Write an ARROW function that returns if a number is divisible by 10

const div_by_10 = num => num % 10 === 0;

console.log(div_by_10(10)); // Output: true
console.log(div_by_10(19)); // Output: false

// TODO: Write two functions that use asnyc and await to fetch data from an API at the same time (Check out https://dummyapi.online/ for some URLs to put in fetch() )

async function get_movie() {
    let response = await fetch('https://dummyapi.online/api/movies/1');
    let data = await response.json();
    console.log(data);
}

async function get_blog() {
    let response = await fetch('https://dummyapi.online/api/blogposts/1');
    let data = await response.json();
    console.log(data);
}

console.log("Starting async functions ...");
get_movie();
get_blog();
console.log("Finished calling async functions ...");