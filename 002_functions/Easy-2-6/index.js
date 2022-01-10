// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

const typeOfTriangle = (sideA, sideB, sideC) => {
    if (
        sideA + sideB + sideC === 180 &&
        sideA != 0 &&
        sideB != 0 &&
        sideC != 0
    ) {
        if (sideA === sideB && sideB === sideC) {
            return 'Equilateral Triangle';
        } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
            return 'Isosceles Triangle';
        } else {
            return 'Scalen Triangle';
        }
    } else {
        return 'Not a triange';
    }
};

console.log(typeOfTriangle(30, 60, 90));
