# Module 6 - Debugging and Error Handling

## Key Concepts

1) Try/Catch: Using try/catch blocks to handle exceptions.

2) Debugging and Console Logging: Utilizing console.log(), console.error(), other logging methods for debugging.

## Try/Catch

*try {block statement} catch (error) {block statement}*

try/catch is a mechanism in JavaScript that allows you to handle exceptions (errors) gracefully. When an error occurs in a try block, control is transferred to the catch block, where you can handle the error or log it for further investigation. Its primary purpose is to manage exceptions and handle errors that occur during the execution of code, allowing the program to continue running smoothly rather than crashing or producing unpredictable results.

- **try**:
Contains the code that you want to execute. If an error occurs in this block, JavaScript will stop executing the code inside the try block and immediately jump to the catch block.

- **catch**:
Contains the code to handle the error. The catch block takes a single parameter, often named error, which represents the error object. You can use this parameter to get information about the error and perform appropriate error handling.

- **finally** (optional):
The finally block is optional and can be added after the catch block. It contains code that will execute regardless of whether an error occurred or not. This is often used for cleanup operations, such as closing files or releasing resources.

In example 6.1.1, an invalidly formatted JSON string is intentionally assigned to the variable *invaldJsonString*, so when it is passed as an argument into JSON.parse() (which converts a JSON string into a JSON object), an error occurs. This error is **thrown** in the try block and **caught** in the catch block.

You can manually throw errors as well with try/catch blocks. This comes in handy if you are making a function and you want to block certain behaviors - you can throw an error to restrict a given input. A good example of the usefulness of throwing an error is shown in example 6.1.2 with the division function. Dividing by 0 is not mathematically possible, so if someone tries to divide by 0 you can manually throw an error to say that dividing by 0 is not allowed.

## Debugging and Console Logging

### Logging Methods

- console.log(): Outputs general information to the console.

- console.error(): Outputs error messages to the console.

- console.warn(): Outputs warnings to the console.

- console.info(): Outputs informational messages to the console.

- console.debug(): Outputs debugging information to the console.

- console.trace(): Outputs a stack trace to the console, showing the call stack at the point where it is invoked.

### Breakpoints

Breakpoints are a powerful feature of modern browsers’ developer tools that allow you to pause code execution at a specific line, so you can inspect variables, call stacks, and evaluate expressions.

How to Set a Breakpoint:

1) Open Developer Tools (usually F12 or right-click and select "Inspect").

2) Go to the "Sources" tab.

3) Navigate to your JavaScript file.

4) Click on the line number where you want to set a breakpoint.

## The Golden Rule of Debugging

Google is your best friend, and often times the best way to understand an error is by using the internet to search exactly what that error is. If you are having an issue with something in JavaScript, chances are someone else has had the exact same issue before and has posted about it online, so don't hesitate to use the internet often!