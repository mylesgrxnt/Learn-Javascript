# Module 2 - Functions and Scope

## Key Concepts

1) Basic Function Concepts: Defining functions, function parameters and arguments, function scope and visibility, and return values.

2) Advanced Function Concepts: Arrow functions, function expressions, and closures.

3) Asynchronous Functions and Promises: Introduction to asynchronous programming concepts, promises, and async/await.

## Basic Function Concepts

2.1 in "examples_2.js"

In JavaScript, functions are fundamental building blocks used to encapsulate a block of code that can be executed whenever needed. They provide modularity, allowing code to be organized into reusable units. Functions are always defined once in a section of code called the function declaration, but can be invoked as many times as you want.

A common coding principle/best practice is the idea of having **DRY** code. DRY stands for **D**on't **R**epeat **Y**ourself, and functions are the best way of making sure that your code stays DRY, as any code that would be repeated can instead be written once in a function, then invoked as many times as necessary.

For example, suppose you needed to find what letter grade a student got on an assignment based on the score out of 100 they received (i.e. example 1.4.2 in "examples_1.js"). Doing this once is no problem, simply write out the conditional statements and logic to evaluate this. Now instead suppose that you have 30 students you need to grade. This is no longer a quick and easy task, as you would have to write out the same code segment 30 separate times! Functions solve this probelm, allowing you to do repetitive tasks as many times as you need by simply writing the logic one single time.

### Defining Functions

*function func(optional parameters) {block statement, optional return}*

Syntax: Functions are defined using the function keyword followed by the function name and parentheses (). The function body is enclosed in curly braces {} where the actual code of the function resides.

Function Name: The function name is used to invoke (call) the function later in your code. It should be a meaningful name that describes what the function does, so make sure not to name things stuff like "function_a" or "do_something". Instead, for example, if you are making a function that adds 2 numbers together, name it something like "sum_two_numbers".

Invoking a Function: Functions are executed via a "function call" by using the function name followed by parentheses (). If a function requires parameters (inputs), they are passed inside these parentheses.

In example 2.1.1, the function name is "greet" and the function body is "console.log("Hello!");". So anywhere that the function is invoked (or called) throughout the body of the code, "Hello!" will be printed to the console.

### Function Parameters and Arguments

Parameters: Parameters are placeholders listed in the function definition. They act as local variables within the function. Parameters are declared inside the parentheses () of the function definition and are set to actual values within the function call via passing arguments into the function call: *func(argument);* . It is important to keep in mind the data type when passing parameters in a function call, as you must keep the type consistent with the operations you are performing on the parameter within the function block. For example, if you are doing some operation on the parameter and you expect the parameter to be of the type **String**, you will get unpredictable or erroneous behavior if you pass a **Number** in the function call instead.

In example 2.1.2, the parameter is *name*, so whatever is passed through the function call will be assigned to the variable *name*. In this case, it is the String "Pete", but you can replace that with whatever you want in the function call!

### Function Scope and Visibility

Scope refers to the context of what variables/functions a function can and cannot access.

- Global Scope: Variables and functions declared outside of any function have global scope. They can be accessed from anywhere in the code, including other functions.

- Local Scope: Variables declared within a function have local scope. They are only accessible within the function where they are declared.

- Visibility: Functions declared globally are accessible throughout the script. Functions declared within another function are only accessible from within that function (unless returned or assigned to a global scope variable).

In example 2.1.3, there are two variables defined: *a* and *b*. Variable a is defined outside of any functions, which makes it in the global scope. Variable *b*, on the other hand, is defined within the local scope of scope_example(), thus it cannot be accessed outside of scope_example().

### Return Values

Functions in JavaScript can optionally send values from within the function to outside the function via the 'return' keyword. Any value returned by a function can then be set to a variable or used in any way that its return value could be used.

Returning Values: The return statement ends the function execution and specifies the value to be returned to the caller. If no return statement is present, the function returns undefined by default.

In example 2.1.4, the function birth_year(age) returns the year that someone is born based on how old they are (assuming they have had their birthday thus far). Instead of simply calling the function later on, the function call instead includes a variable assignment using the "let" keyword.

## Advanced Function Concepts

2.2 in "examples_2.js"

**The remaining concepts in this module are a jump up in complexity from what we have discussed so far! If things don't make sense at first, feel free to come back to this section at a later time or after completing the rest of the course. Like always, there are links to helpful websites for each topic listed in the links markdown file, so feel free to peruse those as well.**

### Arrow Functions

*const func = (optional parameters) => {block statement, optional return};*, *const func = (optional parameters) => single line statement;*

Another syntax for writing functions you may run into, particularly if doing any frontend work, are arrow functions. Arrow functions have the advantage of providing tighter, more compact syntax for writing small functions, but have some key differences that you must pay attention to in order to use them properly.

Arrow functions follow the syntax above, with the keyword const followed by the function name, then optional parameters, then finally a blcok statement with a return, just like a regular function. If you do not have any parameters in your arrow functions you can simply write *const func = () => ...*, leaving the parenthesis empty. If you only have one paramter, you can write *const func = parameter => ...*, with no parenthesis. Optionally, if you only have a one line function you can omit the block statement altogether and write *... => single line statement*. In that instance, the function will implictly return whatever you put in the single line i.e. *... => {return a + a};* is the same as *... => a + a;* in an arrow function.

As far as best practices are concerned, you want to always make sure you are using the const keyword instead of the let or var keyword. If you think about it, this makes sense, as the const keyword is reserved for **constant** variables, or information that is not changing. You cannot redefine functions in JavaScript -- once you establish that a function does X, you cannot go back and write a function with the same name that does Y. Thus, using the const keyword makes sense, as the arrow function you define is not going to change.

In example 2.2.1, the three adding functions, *add1*, *add2*, and *add3* all functionally do the exact same thing, but with different syntaxes. *add1* was written in the standard function notation that we had already learned, *add2* is written in arrow function notation with a block statement, and *add3* is written in arrow function notation with a single line statement.

### Function Closures

In JavaScript, closures are a powerful and often misunderstood concept. A closure is formed when a function is able to remember and access its lexical scope even when that function is executed outside that lexical scope. In simpler terms, a closure allows a function to retain access to variables from its outer (enclosing) function scope even after the outer function has finished execution.

In example 2.2.2

- outerFunction() defines outerVariable and innerFunction

- innerFunction() is returned from outerFunction

- when closureExample() is called later, it still has access to outerVariable, even though outerFunction() has already executed and returned.

How Closures Work:

- Lexical Scope: In JavaScript, functions are lexically scoped, which means they have access to variables defined in their outer scope, including variables from parent functions even after those parent functions have returned.

- Access to Variables: When outerFunction() executes, outerVariable is created and innerFunction() is defined within this scope. Despite outerFunction() finishing execution, innerFunction() maintains a reference to outerVariable.

- Execution Context: When closureExample is invoked, innerFunction() still "remembers" its original scope and can access outerVariable because of the closure that was created when outerFunction() finished running.

Closures are primarily used as a means of "maintaining state" for functions in JavaScript, but what does that mean? In the context of closures, maintaining state refers to the ability of a function to retain access to variables from its lexical scope even after that scope has exited. This capability is intrinsic to closures due to their ability to "close over" their surrounding environment, thereby encapsulating variables and keeping them alive beyond the execution of the outer function.

In example 2.2.3:

- createCounter() is a function that defines a local variable count and returns another function increment.
 
- The increment function, returned from createCounter(), closes over the count variable, allowing it to access and modify count even after createCounter() has finished executing.

- Each time counter1() is called, it increments and returns count, maintaining the state of count across multiple calls.

- counter2, created separately, maintains its own isolated state of count, demonstrating how closures encapsulate state within individual instances.

Closures allow for private variables that are accessible only within the closure, enhancing data integrity and security. On top of that, closures can store computed values (memoization) and reuse them without recalculating, improving performance in certain scenarios.

## Asynchronous Functions and Promises

2.3 in "examples_2.js"

### Introduction to Asynchronous

This subsection will be more conceptual and not necessarily JavaScript-specific, but nonetheless incredibly important to understanding how to code asynchronously, especially since JavaScript (by nature of its proclivity towards web-based applications) makes use of asynchronous programming far more often than other standard applications of programming languages.

Typically, programming is done sequentially. That is to say, X happens, which triggers Y, then Z, etc. A recipe for making cookies is a fantastic example of this. If you follow the recipe down to the very letter, you will:

1) Whisk the ingredients to make the dough.

2) Shape the dough into cookie shapes.

3) Preheat the oven.

4) Bake the cookies.

Above would an example of **synchronous** methods, meaning things are done in sequence. This process, however has a lot of inefficiencies. For starters, you don't preheat the oven until after making the dough into cookie shapes and while you are waiting for the oven to preheat, you are not doing anything. If you wanted to do this process asynchronously, you could combine steps 2 and 3, preheating the oven while shaping the cookie dough, effectively completing two tasks at the same time. As preheating the oven is not reliant upon the results of any other step, it is able to be completed asynchronously. With that in mind, you couldn't asynchronously do steps 1 and 2, as it wouldn't make sense to begin shaping the dough until the dough is made!

Asychronous programming is the exact same idea, instead of completing two or more tasks in succession, you complete them at the same time. In the context of programming, this could be running multiple tests at the same time, in order to cut down on the total amount of time spent testing. The truth is, modern computers are incredibly powerful, and most coding sequeunces use very little of the computer's actual processes. Running asynchronous processes (when it makes sense) can help efficiently utilize the computer's resources and minimize the amount of time code takes to run.

### Promises

**Promise syntax is shown in "examples_2.js" under 2.3 Asynchronous Programming**

A Promise in Javascript is a container (we will go over containers more in Module 3 - Working with Objects and Arrays) that promises to eventually hold a value. At first, the Promise is empty, but after an asychronous process is either filled with a successful return value or an error, there are 3 processes you can apply to the object.

- .then() tells it what to do upon receiving a value.

- .catch() tells it what to do if an error was thrown before receiving a value.

- .finally() runs regardless of which of the above cases is true.

From a non-technical perspective, the analogy of the fast-food buzzer is great for understanding promises. Suppose you order food from a restaurant and they give you one of those buzzers that has lights that flash when your food is done. Ordering the food is the creation of the promise, the restaurant promises to deliver the food to you. While waiting for your food, you find a table, grab a drink, check your phone, etc. This is the asynchronous part of promises. Then the buzzer goes off while you're in the middle of another task and your food is delivered to you! The only difference between this example and the JavaScript example is that, in JavaScript, you run into the possibility of an error being thrown, and you don't have to retrieve the food, it simply immediately appears in fron of you.

Example 2.3.1 explanation:

Promise Creation (fetchDataFromAPI function):

- The fetchDataFromAPI function creates and returns a Promise using new Promise((resolve, reject) => { ... }).

- Inside the Promise's executor function, there's a setTimeout function that simulates an asynchronous operation (like fetching data from an API) with a 2-second delay.

- In this example, resolve(data) is called after the delay to fulfill the Promise with mock data.

Using the Promise (then, catch, and finally):


- After fetchDataFromAPI() is called, .then() is used to handle the resolved value (data).

- .catch() is used to handle any errors that might occur during the Promise's execution, such as network errors or failed operations.

- .finally() is used to perform cleanup tasks or final actions, which execute regardless of whether the Promise was resolved or rejected.

Output:

- "Fetching data..." is logged immediately.

- "After fetchDataFromAPI function call, but before data is fetched." is logged synchronously.

- After approximately 2 seconds (due to the setTimeout delay), "Data fetched successfully:" the mock data will be logged to the console.

- The names extracted from the fetched data are logged as "Names:".

- If an error were to occur, the console would log "Error fetching data:" followed by the error message.

- "Cleanup or final tasks can be performed here." is logged at the end, demonstrating the use of .finally().

### Async/Await

Async functions and the await keyword in JavaScript provide a more readable and synchronous-looking way to write asynchronous code. They were introduced in ES2017 (ES8) and have since become a standard approach for handling promises and other asynchronous operations.

- Async Functions: An async function is a function declared with the async keyword. It operates asynchronously via the use of promises internally. Here's how you declare and use an async function:

Async Function Declaration:

- Functions declared with async keyword automatically return a promise.

- Inside an async function, you can use the await keyword to pause execution until a promise is settled (resolved or rejected).

Await Keyword:

- Used inside async functions to wait for a promise to resolve.

- It can only be used inside async functions.

In example 2.3.2, an async function fetchData() is defined:

**async function fetchData()**
- Declares an asynchronous function named fetchData. The async keyword before function indicates that this function will operate asynchronously and will return a promise.

**let response = await fetch('https://dummyapi.online/api/movies/1');**
- Declares a variable response.
- await pauses the execution of the async function until the fetch operation completes and the promise returned by fetch is resolved or rejected.
- fetch('https://dummyapi.online/api/movies/1') initiates a fetch request to the specified URL and returns a promise that resolves to a Response object representing the response to the request.

**let data = await response.json();**
Declares a variable data.
- await pauses the execution of the async function until the json() method on the response object completes and the promise returned by json() is resolved or rejected.
- response.json() returns a promise that resolves with the parsed JSON data of the response body.

**return data;**
- Returns the data extracted from the JSON response. This value will be wrapped in a resolved promise because fetchData is declared as an async function.

All in all, async functions and the await keyword provide a cleaner, more concise way to write asynchronous JavaScript code, making it easier to manage and understand complex async flows without sacrificing performance or readability. They are a backbone of javascript web-development, so it is important to get a solid technical and conceptual understanding of them in order to be a successful JavaScript developer.