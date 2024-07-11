# Module 1 - Introduction to JavaScript

## Key Concepts

1) Variables and Constants: Declaring variables using var, let, and const, and understanding variable scopes.

2) Data Types: Exploring primitive data types (e.g., numbers, strings, booleans) and reference data types (e.g., objects, arrays).

3) Operators: Using arithmetic, assignment, comparison, and logical operators to perform operations in JavaScript.

4) Control Structures: Implementing control flow with if statements, else clauses, else if conditions, and switch statements to make decisions in your code.

5) Functions: Defining functions to encapsulate reusable blocks of code, understanding function parameters and return values.

## Variables and Constants

1.1 in "examples_1.js"

Variables: Named containers used to store data values. Variables are declared using 'var', 'let', or 'const'.

 - 'var': Declares a variable with function scope (global if declared outside a function).

 - 'let': Declares a block-scoped variable (i.e. within a pair of curly braces { } ), allowing reassignment of values.

 - 'const': Declares a block-scoped constant, whose value cannot be changed once set.

In general, you will be using primarily 'let' and 'const'. 'let' will be used for any variable that you want to have the ability to reassign, and const will be used for variables that you know will not change.

## Primitive Data Types

1.2 in "examples_1.js"

Number: Represents numeric values, either Integer (-1,0,1,2,3,...) or Float (1.0,2.15,102.124,...).

String: Represents text, enclosed with either single ('...') or double ("...") quotation marks.

Boolean: Represents a logical value, either True or False.

Undefined: Represents a variable that has been declared, but not assigned any particular value.

Null: Represents a variable that has been intentionally had a value omitted.

There are 3 more Data Types in JavaScript that we will discuss later: Bigint, Symbol, and Object

## Operators

1.3 in "examples_1.js"

### Arithmetic Operators

Arithmetic Opera1tors perform arithmetic operations on 2 numbers:

 - "+" Addition

 - "-" Subtraction

 - "*" Multiplication

 - "/" Division

 - "%" Modulus (remainder)

### Assignmnent Operators

Assignment Operators assign values to variables:
1
 - "=" Assigns a value

 - "+=" Adds and assigns: "a += b" is equivalent to "a = a + b"

 - "-=" Subtracts and assigns: "a -= b" is equivalent to "a = a - b"

 - "*=" Multiplies and assigns: "a *= b" is equivalent to "a = a * b"

 - "/=" Divides and assigns: "a /= b" is equivalent to "a = a / b"

 - "++ and --": These are special operators that increment and decrement by 1, respectively. "a++" is equivalent to "a = a + 1" abd "a--" is equivalent to "a = a - 1"

### Comparison Operators

Comparison Operators compare two values and return a Boolean result.

 - "==" Equal to
1
 - "!=" Not equal to
 
 - "===" Strict equal to (checks both value and type)

 - "!==" Strict not equal to

 - ">" Greater than

 - "<" Less than

 - ">=" Greater than or equal to

 - "<=" Less than or equal to

### Logical Operators

Logical Operators combine multiple conditions and return a Boolean result.

 - "&&" Logical AND

 - "||" Logical OR

 - "!" Logical NOT

## Control Structures

1.4 in "examples_1.js"

Control Structures

### Conditional Statements

Conditional Statements are statements that execute blocks of code { } depending on certain conditions housed in ( ).

 - The "if" statement executes a block of code based on whether or not the given condition evaluates to True. An "if" statement may or may not be proceeded by an "else" statement.
  - *if (condition) {block statement}*

 - The "else" statement always follows an "if" statement, and may not exist on its own. An "else" statement executes a block of code only in the instance that the preceeding "if" statement evaluates as False
  - *else {block statement}*

 - The "else if" statement combines the functionality of the "else" statement and the "if" statement. The statement executes a block of code only if the preceeding "if" (or "else if") statement evaluates as False AND the given condition evaluates as True.
  - *else if (condition) {block statement}*

### Loops

Loops repeat a block of code based on given conditions.

#### for loop

*for (initialization; condition; afterthought) {block statement}*

The "for" loop repeats until a given condition evaluates to False. It follows the following 5 step process:

1) The initialization occurs, typically initializing a loop counter.

2) The condition is checked. If this condition evaluates to False, the for loop terminates, otherwise the loop continues.

3) Execute the code in the block statement { }.

4) The afterthought is executed, typically iterating the loop counter.

5) Return to step 2.

In example 1.4.1 in "example_1.js", the variable "i" is initially set to 0 in the initialization step. Following that, "i" is checked against the value 5, and as i (equal to 0) is less than 5, the loop exectues the code in its block statement, in this case printing the value of i to the console. Finally, "i" is incremented by one according to the afterthought, and the cycle repeats in step 2, but now with "i" being equal to 1.

"for" loops are great for executing a block statement a specified amount of times, such as the above example executing exactly 5 times. When using for loops in this context, it is best practice to use the letter "i". In nested for loops (a for loop inside the block statement of another for loop), use "j", then "k" if you have a double nested for loop(a for loop in a for loop in a for loop). Try your best to avoid double and even single nested for loops, as they can exponentially balloon the amount of time your code takes to execute!

#### while loop and do while loop

*while (condition) {block statement}*

*do {block statement} while (condition);*

The "while" loop repeats as long as a condition evaluates to True. The while loop and "do while" loop are very similar, but differ in when they check the condition. In a while loop, the condition is checked before the block statement executes, whereas in a do while loop, the block statement is executed before the condition is checked.

While loop:

1) The condition is checked. If this condition is True, the loop continues.

2) Execute the code in the block statement { }.

3) Return to step 1.

Do while loop:

1) Execute the code in the block statement { }.

2) The condition is checked. If this condition is True, the loop continues.

3) Return to step 1.

Make sure to avoid infinite loops when using while or do while loops! Using *while (true) {block statement}* can be very dangerous, as the code will continue executing indefinitely.

### Switch Statements

*switch(expression) {*

 *case (expression):*

  *do something*

 *case (expression):*

  *do something else*

 *default:*

  *do a default thing*
*}*

The "switch" statement in JavaScript provides a way to execute different code blocks based on different conditions. Switch statements are particularly useful when you have a single expression that can have multiple possible values, and you want to execute different code blocks for each value without writing multiple nested if-else statements. They provide a structured way to organize code based on multiple conditions, improving readability and maintainability in JavaScript programs.

1) The switch statement begins by evaluating an expression (often a variable or a value) that is provided in parentheses after the "switch" keyword.

2) The evaluated expression is then compared with each case label (specified using the "case" keyword followed by a value or expression). If a match is found between the evaluated expression and a case label, the corresponding block of code associated with that case is executed.

3) Once a matching case is found, JavaScript executes the block of code associated with that case. This block is enclosed within curly braces {} and typically includes one or more statements.

4) After executing the code block for a matched case, the "break" statement is encountered. This causes JavaScript to exit the switch statement and continue execution after the switch block. If "break" is omitted, execution will continue into the next case block regardless of whether its condition matches.

5) *(Optional)* If none of the case labels match the evaluated expression, the optional "default" case can be provided. If included, the code block associated with the default case will execute. This is akin to an "else" statement in an if-else structure.

## Functions

1.5 in "examples_1.js"

Functions are reusable blocks of code that are declared once, then called (or executed) as many times as you want. Functions execute an order of instructions, and can optionally intake parameters (values coming from outside the function used within the function) and/or return a value.

### Function Declarations

The "function" keyword is used to declare a function. Next, the function name follows with parentheses that may contain parameters, which are values that are "insterted" into the function and will be used throughout the function body. The entirety of the function is enclosed by curly braces { }. Functions can only be declared once, so you may not reuse the name of a function.

### Function Calls

While a function can only be declared once, it can be "called" as many times as you want. A function call is the program executing the code within the function. While parameters are optional to include within the function definition, if a function is defined with parameters you must include values for those parameters! For example, in the function in exmample 1.5.1 in "examples_1.js", you must include exactly 2 values in the function call, one each for both "a" and "b", or else you will get an error.