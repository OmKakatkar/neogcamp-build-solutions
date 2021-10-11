// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

const readlineSync = require('readline-sync');
const mass = readlineSync.question("Enter Mass : ");
const volume = readlineSync.question("Enter Volume : ");

function getKineticEnergy(mass, volume) {
	return (mass * volume ** 2) / 2;
}

console.log(getKineticEnergy(mass, volume))