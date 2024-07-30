# Module 4 - DOM Manipulation and Events

## Key Concepts

1) Introduction to DOM Manipulation

2) Manipulating DOM Events

3) Event Handling

4) Event Object and Event Handling Techniques

## Important for this Section!

In order to interact with this module properly, you are going to want to make sure you have the "Live Server" extension installed in VSCode. To do this, simply go to the extensions tab on the left side of the screen and search "live server". With Live Server installed, navigate to "example_html.html" and open up the file. Then, in the bottom right hand corner of your screen, there should be a button that says "Go Live". Clicking on this will bring you to a locally hosted page with the html file loaded. Right-click anywhere on the page and click on "inspect". Navigate to the "Console" in the new menu that pops up, as there anything that would typically be logged in the terminal will instead be logged in the console instead. You are now ready to continue!

## Introduction to DOM Manipulation

4.1 in "examples_4.js"

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a webpage as a tree of nodes, where each node represents a part of the document, such as elements, attributes, and text. The DOM provides a structured representation of the document, enabling programs to dynamically access and manipulate the content, structure, and style of web pages. A web page can be viewed as the page in a browser, or as its HTML file in an IDE. HTML stands for Hypertext Markup language, and is the filetype that all web pages are built off. HTML files contain text, with elements dictating whether that text is a heading, paragraph, list, etc. Understanding HTML is an incredibly important aspect of being able to use JavaScript on the web, so I would highly reccommend you to familiarize yourself with it!

Every element, attribute, and piece of text in an HTML document is a node in the DOM tree, with elements organized hierarchically (parent elements containing child elements) forming a tree-like structure.

In example "example.html", < head > is the root node, < head > and < body > are child nodes of < html >, < title > is a child node of < head >, and so on.

There are many different ways of accessing DOM elements in web pages. All of the different methods target things in each element that make them unique, either an ID specific to that element, a class specific to a collection of one or more elements, or the element type itself. These "targets" of a selector are called CSS selectors, with the 5 different types of CSS Selectors being element, ID, class, universal, and group. For more information on CSS selectors, check out the CSS selector link in "links_4.md".

### Select By ID

*const element = document.getElementById('element-id');*

- This method retrieves an element by its id attribute, which should be unique within the document.

### Select By Query Selector

*const element = document.querySelector('selector');*

- Returns the first element that matches a specified CSS selector within the document.

*const elements = document.querySelectorAll('selector');*

- Returns a static NodeList representing all elements that match a specified CSS selector within the document.

## Manipulating DOM Events

Understanding how to manipulate DOM events is pivotal in creating interactive and responsive web applications. Events such as clicks, hovers, and keyboard inputs drive user interaction on the web, and JavaScript provides powerful tools to handle and respond to these events dynamically. By leveraging event listeners and event objects, developers can easily integrate functionality like form validation, interactive animations, and real-time updates into their web pages.

### Modifying Text Content with textContent and innerHTML

The usage of **textContent** and **innerHTML** in JavaScript allows you to manipulate the content of HTML elements, but they differ in how they handle text and HTML content. 

- Handling: textContent treats content as plain text, escaping any HTML tags, while innerHTML parses content as HTML, allowing you to modify HTML structure and formatting.

- Security: textContent is safer to use when you want to ensure that the content is treated as text only, avoiding potential security risks associated with injecting untrusted HTML.

- Performance: textContent generally offers better performance compared to innerHTML when you only need to manipulate text content, as it avoids the overhead of parsing and rendering HTML.

**textContent**: textContent is used to set or get the text content of an element, which includes only the text within the element and ignores any HTML markup.

- In example 4.2.1, the div with id "text-content-example" is selected using document.getElementById("text-content-example") and the text content of that element is changed to "Updated text content with textContent". 

**innerHTML**: innerHTML is used to set or get both the HTML content and text content of an element. It allows manipulation of the HTML structure and text content within an element.

- In example 4.2.2, the div with id "innerhtml-example" is selected, and the html itself is modified to include the < strong > tag, bolding the word "Updated" and updating the text.

### Adding, Removing, and Changing Attributes

In JavaScript, **setAttribute** and **removeAttribute** are methods used to manipulate HTML attributes of DOM elements dynamically. setAttribute allows you to add a new attribute or modify the value of an existing attribute on an element, while removeAttribute deletes a specified attribute from the element.

**setAttribute**: setAttribute is used to add a new attribute to an element or update the value of an existing attribute. The first parameter in the function is the name of the attribute to be set, and the second parameter is the actual value that that attribute should be set to.

**removeAttribute**: removeAttribute is used to remove a specified attribute from an element. The only parameter is the name of the attribute you would like to remove.

Example 4.2.3 shows setAttribute in action and example 4.2.4 shows removeAttribute in action.

## Event Handling

All of the code written so far in the "examples_4.js" file so far has just been floating outside of functions and outside any events. As it is not tied to anything, there is nothing telling the compiler when to execute any code, it just simply exists and has no triggers to be called. This problem of the compiler not knowing when to execute code is solved by the introduction of a concept known as event handling. Event handling in JavaScript allows developers to create dynamic and interactive web applications by responding to user actions and browser events with executing code. Understanding how to manage and utilize events is crucial for implementing features such as form validation, interactive animations, and real-time updates.

### Introduction to Events

**What are Events?** Events in JavaScript are actions or occurrences that happen in the browser, triggered by user interactions (like clicks or keyboard input) or by the browser itself (like page load or resize).

**Event-Driven Programming**: JavaScript operates on an event-driven paradigm, where code execution is determined by events rather than a linear sequence of statements. This allows for asynchronous and responsive behavior in web applications.

### Event Listeners

An event listener in JavaScript is a function that waits for a specific event to occur on a selected HTML element or elements. It "listens" for the event and then executes a specified callback function or piece of code in response to that event. Event listeners are fundamental to creating interactive and dynamic web pages because they enable developers to respond to user actions, such as clicks, mouse movements, key presses, form submissions, and more.

**addEventListener** is a method that attaches an event handler to a specified element, allowing you to listen for a specific event and execute a callback function in response. The syntax is as follows: *element.addEventListener(event, callback);* with *event* being a string representing the event type ('click' for a mouse click, 'DOMContentLoaded' for the window loading, etc.) and *callback* being the function to be executed when the event occurs.

In example 4.3.1, a function named log_click() is made to log "Button clicked!" to the console. The button is then selected by its ID and an event listener is added to it, done with *button_example.addEventListener(...)*. When the event is triggered (as the event is "click" in this case, that would be when the *element* button_example is clicked), the function in the Event Listener will be called and executed.

### Common DOM Events

- **Mouse Events**: click, mouseover, mouseout, mousemove.

- **Keyboard Events**: keydown, keyup, keypress.

- **Form Events**: submit, reset, change, input.

- **Window Events**: load, resize, scroll.

## Event Object and Event Handling Techniques

### Event Object

The event object (event) in JavaScript provides a wealth of information about an event that occurs on an element in the Document Object Model (DOM). When an event is triggered (e.g., click, keypress, submit), the event object is automatically passed as an argument to the event handler function/callback. The types of information you can get changed based on the event type, for example, if you are triggering an event related to the mouse ('click', 'mouseover', 'mouseout', etc.) you can get information from that event based on the mouse position. These are some of the most common pieces of information you can retrieve from an event object, as well as the events they are restricted to (if they have any):

Event Type:
- Description: Specifies the type of event that occurred (e.g., 'click', 'keydown', 'submit').
- Access: *event.type*

Target Element (see example 4.4.1):
- Description: Refers to the element on which the event was originally triggered (where the event occurred).
- Access: *event.target*

Current Target Element:
- Description: Refers to the element to which the event handler is currently attached (where the event listener is set).
- Access: *event.currentTarget*

Event Coordinates (Mouse Events):
- Description: Provides the coordinates of the mouse pointer relative to the document or to the target element.
- Access: *event.clientX*, *event.clientY*, *event.pageX*, *event.pageY*

Keyboard State (Keyboard Events):
- Description: Indicates the state of modifier keys (e.g., Shift, Ctrl, Alt) during a keyboard event.
- Access: *event.shiftKey*, *event.ctrlKey*, *event.altKey*

Form Data (Form Events):
- Description: Contains form data submitted with the event (e.g., form input values).
- Access: Depends on the specific form event (*event.target.value*, *event.target.checked* for checkboxes/radio buttons, etc.)

Event Timestamp:
- Description: Provides the timestamp when the event occurred.
- Access: *event.timeStamp*

Related Target (Mouse Events):
- Description: Refers to the secondary element involved in the event (e.g., the element being entered or exited during a mouseover or mouseout event).
- Access: *event.relatedTarget*

Key Code/Key Value (Keyboard Events):
- Description: Provides information about the key pressed during a keyboard event.
- Access: *event.keyCode*, *event.key*, *event.code*

Data Transfer (Drag and Drop Events):
- Description: Contains data being transferred during drag-and-drop operations.
- Access: *event.dataTransfer*

### Event Delegation

Definition and Benefits

- Event Delegation: Technique where a single event listener is attached to a parent element to manage events for multiple child elements.
  - Simplifies event management, especially for dynamically added elements.
  - Reduces memory usage by minimizing the number of event listeners.

Using Event Bubbling for Event Delegation:

- By leveraging event bubbling (the natural propagation of events from child to parent elements), you can handle events for multiple elements with a single event listener on a parent element. This is shown in example 4.4.2, where a conditional checks if the element tag is < li >, then logs that element if it is clicked, using a click Event Listener.