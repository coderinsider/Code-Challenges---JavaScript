/*
  WRITE YOUR SOLUTION HERE
*/
/*
function Movie(title, director, genre, releaseYear, rating) {
	this.title = title;
	this.director = director;
	this.genre = genre;
	this.releaseYear = releaseYear;
	this.rating = rating;
}

Movie.prototype.getOverview = function() {
	return `${this.title}, a ${this.genre} film director by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
}
*/
class Movie {
	constructor(title, director, genre, releaseYear, rating) {
		this.title = title;
		this.director = director;
		this.genre = genre;
		this.releaseYear = releaseYear;
		this.rating = rating;		
	}
	getOverview() {
		return `${this.title}, a ${this.genre} film director by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
	}
}
const SpiderMan = new Movie("Spiderman", "Sam Raimi", "Action", 2002, 87);
const BatMan = new Movie("The Dark Knight", "Christopher Nolan", "Action", 2008, 82);
console.log(SpiderMan.getOverview());
console.log(BatMan.getOverview());