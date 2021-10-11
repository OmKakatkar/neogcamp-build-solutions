// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a



const readlineSync = require('readline-sync');
const side = readlineSync.question('Enter the length of side : ');

class Square {
	constructor (side) {
		this.side = side;
	}

	area() {
		return this.side**2;
	}
	perimeter() {
		return 4 * this.side;
	}
	surfaceArea() {
		return 6 * this.side ** 2;
	}
	volume() {
		return this.side**3;
	}
}

const square = new Square(side);
console.log('Area : ' + square.area(), 'Perimeter : ' + square.perimeter(),'Surface Area : ' +  square.surfaceArea(),'Volume : ' +  square.volume())

