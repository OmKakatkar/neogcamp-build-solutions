// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

function typeOfTriangle(a,b,c) {
	if (a + b + c === 180 || a != 0 && b != 0 && c != 0) {
		if(a === b && b === c) {
			return 'Equilateral Triangle'
		} else if (a === b || a === c || b === c) {
			return 'Isosceles Triangle'
		} else {
			return 'Scalen Triangle'
		}
	}
	else {
		return "Not a triange"
	} 
}

console.log(typeOfTriangle(30 ,60 ,90))