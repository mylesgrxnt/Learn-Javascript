# Module 3 - Working with Objects and Arrays

## Key Concepts

1) Objects: Object Literals, Accessing Properties, Adding and Modifying Properties, Object Methods, and Iterating over Properties.

2) Arrays: Array Literals, Accessing Elements, Adding and Removing Elements, Array Methods, and Iterating over Arrays.

## Objects

By now you may have seen the word "object" once or twice, but what exactly IS an object in JavaScript? In JavaScript, objects are containers that store variables and methods. In real life, any physical object (like an oven, for example) will have both **properties** and **methods**. Properties are the ways you can describe the object, in the case of the oven, this would be things like temperature, brand, color, etc. Methods are the ways an object can interact with the world or be interacted with, i.e. the things an object can do or have done to it. Sticking with the oven example, an oven would be able to preheat, bake, broil, have its door opened, etc.

### Object Literals

An object literal is defined using curly braces {} and consists of zero or more comma-separated **key:value** pairs, where each key is a string and each value can be any valid JavaScript expression, including integers, strings, other objects, arrays, functions, etc. If you want to have the ability to change the properties within your object, create the object using the *let* keyword, otherwise use *const* if you want the key:value pairs to remain constant.

In example 3.1.1, we have taken the oven example and given it the properties brand, temperature, and color, as well as a method that preheats/changes the temperature of the oven. The spacing in object creation is for readability's sake only, you can list everything out on a single line and it won't change the functionality of the object.

### Object Properties

Objects can have their properties accessed using the format: *object.key* or *object[key]*, from there, you can treat the result as you would any other value in JavaScript.

Changing the value of a property is as easy as doing *object.key=value* or *object[key]=value* . This syntax will modify an existing property if one exists, otherwise it will create a new property with the specified key value pair. For example, if you created the oven object, and then later on wanted to add a property for the number of racks in the oven, you could do *oven.num_racks=2* to set create a new property called num_racks and set it equal to 2. This is demonstrated in example 3.1.2 with the property num_racks being added.

### Object Methods

Methods in JavaScript are almost identical to functions, with the key difference being that methods are always associated with and object, whereas functions live on their own. Syntax-wise, writing a method within an object works exactly the same as writing a function outside of an object, the only difference is that you swap the function name with the word "function". To get an example of this, check out example 3.1.1 and its preheat method.

Invoking a method is also the same as a function, and follows the syntax of *object.method(optional arguments);*

A convenient feature of objects is the existence of the **this** keyword. **this** allows objects to access their own properties from within themselves. If you are familiar with Python, this is essentially JavaScript's **self** keyword. The usefulness of the **this** keyword is demonstrated in example 3.1.1 in the preheat(new_temperature) method, as it allows us to alter the temperature of the oven based on a new_temperature parameter.

### Iterating Over Properties

Iteration in coding is the idea of repeating the same set of operations over and over again, until a given condition is met. Typically, "iterating over X" means to go through everything contained within X one by one and apply the same set of instructions to it. In example 3.1.3, we go through every property within the oven object and apply the instruction to log the key to the console.

For loops are the primary way that iteration occurs, as there is an easy syntax to encapsulate every key within a container. Iterating over a container using a for loop uses a special type of for loop syntax known as a for...in loop -> *for (let variable in container) {block statement}* . You start by initializing a variable, just as in a typical for loop, remember to name the variable something relevant to the thing you are iterating over. In this case, as we are iterating over the keys in an object, *let key* makes the most sense. After initializing the variable, *in container* specifies which container you will be iterating over, in this case we are iterating over an object, so we will put the object name in place of *container*. 

## Arrays

In both JavaScript and the majority of modern programming languages, an array is a data structure used to store a collection of items that are of the same data type. Arrays serve as a convenient way to organize and manipulate data. In JavaScript specifically, arrays are used to store multiple values in a single variable. They are a fundamental data structure that allows you to store and access elements sequentially using numeric indices.

### Array Literals

*let arrayName = [element1, element2, ..., elementN];*

In JavaScript, an array literal is a shorthand notation for creating arrays. It allows you to define an array and initialize its elements in a concise and readable way using square brackets [ ]. *arrayName* is the name of the variable that will reference the array and *element1, element2, ..., elementN* are the elements (values) that will be stored in the array. These elements can be of any data type, including numbers, strings, objects, or even other arrays.

### Array Elements

JavaScript Arrays are indexed, meaning each element has a corresponding number dictating its position within the array. Arrays in JavaScript are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on. You can use this information to access an element at a specific position using the following syntax -> *arrayName[index]* . For example, if you wanted to grab the first element in an array you would do *arrayName[0]*, the second element would *arrayName[1]*, etc.

You can reassign elements in arrays at a specific index by setting the value at that index equal to the desired value. For example, in example 3.2.3, the element at index 2 ('Cherry') is replace with 'Orange'. In order to add elements to an array without modifying any existing elements, you can use *arrayName.push(element)* to add an element to the end of the array, or *arrayName.unshift(element)* to add an element to the beginning of an array. Example 3.2.4 showcases both of these additions.

### Array Methods

Arrays are incredibly versatile and have a ton of built-in methods that are incredibly useful. As there are too many to cover in this course, we will cover the most common and universally applicable methods. However, there are a whole host of other methods that could be useful in more niche circumstances, so familiarizing yourself with more array methods is never a bad idea.

#### map()
- Purpose: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- Usage: Ideal for transforming data in an array without mutating the original array.

#### filter()
- Purpose: Creates a new array with elements that pass the test implemented by the provided function.
- Usage: Great for filtering elements based on a condition or criteria.

#### reduce()
- Purpose: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
- Usage: Useful for aggregating values or calculating a single result from an array.

#### find() and findIndex()
- find Purpose: Returns the first element in the array that satisfies the provided testing function.
- findIndex Purpose: Returns the index of the first element in the array that satisfies the provided testing function.
- Usage: Useful for searching for specific elements in an array based on conditions.

#### some() and every()
- some Purpose: Checks if at least one element in the array satisfies the provided testing function.
- every Purpose: Checks if all elements in the array satisfy the provided testing function.
- Usage: Useful for validating or checking conditions against array elements.

#### sort()
- Purpose: Sorts the elements of an array in place and returns the sorted array.
- Usage: Useful for arranging elements in ascending or descending order.

### Iterating Over Arrays

Iterating over arrays in JavaScript is largely the same as iterating over objects, just with slightly differing syntax.

#### for Loop

*Example 3.2.5* -> Using a traditional for loop is the messiest syntax-wise, but provides the highest degree of control in terms of how the iteration process proceeds via the means of an index variable.

#### forEach()

*Example 3.2.6* -> The forEach method is a concise way to iterate over each element of an array. It provides a callback function that is executed once for each array element. It has cleaner syntax, is simpler to and more readable, and overall best suited for simple iteration needs.

#### for...of Loop

*Example 3.2.7* -> The for...of loop is a modern syntax in JavaScript that iterates over iterable objects, including arrays. It provides a more concise alternative to the traditional for loop and has very similar use cases to the forEach() iteration.