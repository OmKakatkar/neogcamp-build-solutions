// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

function minDate(date1, date2) {
	const date1Parts = date1.split('/');
	const date2Parts = date2.split('/');
	const dateObj1 = new Date(date1Parts[2], date1Parts[1]-1, date1Parts[0])
	const dateObj2 = new Date(date2Parts[2], date2Parts[1]-1, date2Parts[0]);

	if(dateObj1 < dateObj2) {
		return date1
	} return date2
}

console.log(minDate('02/05/2021', '24/01/2021'))