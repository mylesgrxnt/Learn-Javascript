// Practice Problems:
// TODO: Target the div with id="message" and fill its content with whatever text you'd like.

msg = document.getElementById("message");
msg.textContent = "Allied Solutions"

// TODO: Use an Event Listener attached to clicking "changeButton" to change the number in the paragraph with id="para" to be a random number between 0 and 100.

function getRandomInt() {
    return Math.floor(Math.random() * 100); // This function returns an integer between 0 and 100
}

function changeText() {
    const pa = document.getElementById("para");
    pa.textContent = "Your random number is: " + getRandomInt();
}

const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", changeText)

// TODO: Use an Event Listener to change the text in the paragraph with id="coordinates" to reflect the current mouse coordinates
// HINT: Try using "mousemove" and event.pageX/event.pageY

const body = document.querySelector("body");
body.addEventListener("mousemove", function(event) {
    pos_text = document.getElementById("coordinates");
    pos_text.textContent = "Mouse Coordinates: " + event.pageX + ", " + event.pageY;
})