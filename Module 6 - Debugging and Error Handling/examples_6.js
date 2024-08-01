// 4.1 Debugging and Error Handling --------------------------------------------------------
// 4.1.1
console.log("TRY/CATCH");
try {
    let invalidJson = "{company: 'Allied', founding_year: 2000"; // Invalid JSON syntax (missing a '}')
    let stringifiedJson = JSON.parse(invalidJson); // This will throw an error
    console.log(stringifiedJson);
} catch (error) {
    console.error(error.message);
} 

// 4.1.2
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        const result = a / b;
        console.log("Result:", result);
    } catch (error) {
        console.error("Error occurred:", error.message); // Use error.message to get the message associated with the error
    }
}

divide(10, 2);  // Output: Result: 5
divide(10, 0);  // Output: Error occurred: Division by zero is not allowed.

// 4.2.1
console.log("\nCONSOLE LOGGING");
function calculateSum(a, b) {
    console.info('Starting calculation with', a, b); // INFO
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.error('Invalid input: Both arguments must be numbers'); // ERROR
        return;
    }
    
    const sum = a + b;
    console.log('Sum:', sum); // LOG
    
    return sum;
}
  
calculateSum(5, 10); // Output: Sum: 15
calculateSum(5,"a"); // Output: Invalid input: Both arguments must be numbers
