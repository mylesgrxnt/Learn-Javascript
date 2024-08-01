// Practice Problems:
// TODO: Debug the following code snippets and try to fix the erroneous lines to make functional code!
// Unexpected output
function add(a, b) {
    return a + b;
}
  
let result = add(5, "10");
console.log(result);

// Reference Error
function calculateArea(radius) {
    const area = Math.PI * r * r;
    return area;
}
  
console.log(calculateArea(5));

// Indexing Error
const fruits = ['apple', 'banana', 'cherry'];

function getFruit(index) {
    return fruits[index];
}

console.log(getFruit(3));
