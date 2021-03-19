/*
  WRITE YOUR SOLUTION HERE
*/
/*
function Book(title, author, ISBN, numCopies) {
	this.title = title;
	this.author = author;
	this.ISBN = ISBN;
	this.numCopies = numCopies;
}
Book.prototype.getAvailablility = function() {
	if(this.numCopies == 0) {
		return `Out of stock`;
	} else if(this.numCopies < 10) {
		return `Low stock`;
	} else {
		return `In Stock`;
	}
}
Book.prototype.sell = function(isNumCopiesSold = 1)  {
	this.numCopies -= isNumCopiesSold;
}

Book.prototype.restock = function(isNumCopiesStocked = 5){
	this.numCopies += isNumCopiesStocked;
}
*/

class Book {
	constructor(title, author, ISBN, numCopies) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.numCopies = numCopies;		
	}
	get availability() {
		return this.getAvailablility();
	}
	getAvailablility() {
		if(this.numCopies == 0) {
			return `Out of stock`;
		} else if(this.numCopies < 10) {
			return `Low stock`;
		} else {
			return `In Stock`;
		}		
	}
	sell(isNumCopiesSold = 1) {
		this.numCopies -= isNumCopiesSold;
	}
	restock(isNumCopiesStocked = 5) {
		this.numCopies -= isNumCopiesStocked;
	}	
}
const HungersGame = new Book(`Hunger Games`, `Suzanne Collins`, 1265544, 1);
console.log(`${HungersGame.getAvailablility()}`);
HungersGame.restock(12);
console.log(`${HungersGame.getAvailablility()}`);
HungersGame.sell(17);
console.log(`${HungersGame.getAvailablility()}`);