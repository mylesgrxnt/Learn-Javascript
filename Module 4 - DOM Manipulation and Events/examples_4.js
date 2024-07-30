// 4.1 Introduction to DOM Manipulation --------------------------------------------------------
// 4.1.1
const elem = document.getElementById("id-selection-example");
console.log(elem.textContent);

// 4.1.2
const firstItem = document.querySelector('.item');
console.log("First item found with the query selector is: " + firstItem.textContent);

// 4.1.3
const items = document.querySelectorAll('.item');
items.forEach(item => {
    console.log("Query Selector All " + item.textContent);
});


// 4.2.1
const textcontentexample = document.getElementById('text-content-example');
textcontentexample.textContent = 'Updated text content with textContent';
// Result: <div id="example">Updated text content</div>

// 4.2.2
const innerhtmlexample = document.getElementById('innerhtml-example');
innerhtmlexample.innerHTML = '<strong>Updated</strong> text content with innerHTML'
// Result: <div id="innerhtml-example"><strong>Updated</strong> text content with innerHTML</div>

// 4.2.3
const addexample = document.getElementById('add-attribute');
textcontentexample.setAttribute('class', 'added-class');
// Result: <div id="add-attribute" class="added-class">Add Attribute Example</div>

//4.2.4
const removeexample = document.getElementById('remove-attribute');
textcontentexample.removeAttribute('class');
// Result: <div id="remove-attribute">Remove Attribute Element</div>


// 4.3.1
const button_example = document.getElementById('click-me');
function log_click() {
  console.log('Button clicked!');
}
button_example.addEventListener('click', log_click);

// 4.3.2
const hover_text = document.getElementById('hover-event');
function bold_text() {
  hover_text.innerHTML = '<strong>This text will bold when you mouse over it!</strong>';
}
function un_bold_text() {
  hover_text.innerHTML = 'This text will un-bold when you mouse over it!';
}
hover_text.addEventListener('mouseover', bold_text);
hover_text.addEventListener('mouseout', un_bold_text);


// 4.4.1
const button = document.getElementById('myButton');
// You can also create an anonymous function within the event listener, like how we declared methods
// within the object literals themselves
button.addEventListener('click', function(event) {
  console.log('Target:', event.target); // Logs the button element
});

// 4.4.2
const myList = document.getElementById('myList');
myList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    console.log('Clicked on item:', event.target.textContent);
  }
});
