// Practice Problems:
// TODO: Construct an object for a car with appropriate properties and methods. You do not need to fill out the contents of the methods.

car = {
    wheel_count: 4,
    weight: 2000,
    type: "sedan",
    make: "honda",
    model: "s2000",
    go_forward: function() {},
    reverse: function() {},
    turn_left: function() {},
    turn_right: function() {}
}

// TODO: Imagine you have a ball within a 100x100 grid, fill in the contents of the methods below
rollingBall = {
    xPosition: 0,
    yPosition: 0,
    xMax: 100,
    yMax: 100,
    rollRight: function() {
        if (this.xPosition < this.xMax) {
            this.xPosition += 1;
        }
    },
    rollLeft: function() {
        if (this.xPosition > 0) {
            this.xPosition -= 1;
        }
    },
    rollUp: function() {
        if (this.yPosition < this.yMax) {
            this.yPosition += 1;
        }
    },
    rollDown: function() {
        if (this.yPosition > 0) {
            this.yPosition -= 1;
        }
    },
    printPosition: function() {
        console.log("Position of the ball is: " + this.xPosition + ", " + this.yPosition);
    },
    resetBall: function() {
        this.xPosition = 0;
        this.yPosition = 0;
    }
}

rollingBall.rollRight();
rollingBall.rollRight();
rollingBall.rollRight();
rollingBall.rollRight();
rollingBall.rollUp();
rollingBall.rollUp();
rollingBall.rollUp();
rollingBall.rollUp();
rollingBall.rollUp();
rollingBall.printPosition(); // Output: Position of the ball is: 4, 5
rollingBall.resetBall();
rollingBall.printPosition(); // Output: Position of the ball is: 0, 0

// TODO: Write a function named reverseArray that takes an array as a parameter, then returns a reversed version of that array.
// EX: reverseArray([1,2,3,4,5]) -> [5,4,3,2,1]



