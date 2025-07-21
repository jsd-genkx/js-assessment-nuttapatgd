"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });


const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;

		// Replace with your own code //
		// Set the home position at (0, 0) before the game starts
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	// Print field //
	print() {
		clear();
		this.field.forEach(row => {
            console.log(row.join(''));
        });
	}

	moveUp() {this.positionRow--;}
	moveDown() {this.positionRow++;}
	moveLeft() {this.positionCol--;}
	moveRight() {this.positionCol++;}

	inBounds() {
		return (
        	this.positionRow >= 0 &&
        	this.positionCol >= 0 &&
        	this.positionRow < this.field.length &&
        	this.positionCol < this.field[0].length
    	);
	}

	runGame() {
		let playing = true;
		while (playing) {
			this.print();
			const direction = prompt("Which way? (u = up, d = down, l = left, r = right)");
			switch (direction) {
				case "u":
					this.moveUp();
					break;
				case "d":
					this.moveDown();
					break;
				case "l":
					this.moveLeft();
					break;
				case "r":
					this.moveRight();
					break;
				default:
					console.log("Invalid input. Use u, d, l, r only!");
					continue;
			}

			if (!this.inBounds()) {
				console.log("You fell off the map. Game Over!");
				playing = false;
			} else if (this.field[this.positionRow][this.positionCol] === hole) {
				console.log("You fell on a hole. Game Over!");
				playing = false;
			} else if (this.field[this.positionRow][this.positionCol] === hat) {
				console.log("You found your hat. You Win!");
				playing = false;
			} else {
				this.field[this.positionRow][this.positionCol] = pathCharacter;
			}
		}
	}
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.

const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.runGame();




// "use strict";
// // JS Assessment: Find Your Hat //
// import promptSync from "prompt-sync";
// import clear from "clear-screen";

// const prompt = promptSync({ sigint: true });


// const hat = "^";
// const hole = "O";
// const fieldCharacter = "░";
// const pathCharacter = "*";

// class Field {
// 	constructor(field = [[]]) {
// 		this.field = field;

// 		// Replace with your own code //
// 		// Set the home position at (0, 0) before the game starts
// 		this.positionRow = 0;
// 		this.positionCol = 0;
// 		this.field[this.positionRow][this.positionCol] = pathCharacter;
// 	}

// 	// Print field //
// 	print() {
// 		clear();

// 		// Replace with your own code //
// 		console.log(this.field); // Please REMOVE this line before you start your code!
// 	}

// 	// Your Code //
// }

// // Game Mode ON
// // Remark: Code example below should be deleted and use your own code.
// const newGame = new Field([
// 	["░", "░", "O"],
// 	["░", "O", "░"],
// 	["░", "^", "░"],
// ]);
// newGame.print();

