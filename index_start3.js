// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

//Solution - ES5 arguments & for loop
function addAll() {
	// 	// return arguments;
	// 	var args = Array.prototype.slice.call(arguments);
	// 	var total = 0;
	// 	for (let i = 0; i < args.length; i++) {
	// 		total += args[i];
	// 	}
	// 	return total;
}

//Solution - ES6- ... rest operator or foreach
//reduce loop through each value but it also has accumulator
// function addAll(...numbers) {
// 1.
// let total = 0;
// numbers.forEach((num) => (total += num));

// return total;

// 2.
///using reduce
// 	return numbers.reduce((acc, currVal) => {
// 		return acc + currVal;
// 	});
// }

// console.log(addAll(2, 5, 6, 7));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) {
	// let total = 0;
	// function checkIfPrime(i) {
	// 	for (let j = 2; j < i; j++) {
	// 		console.log("i", i);
	// 		console.log("j", j);
	// 		if (i % j === 0) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }
	// for (let i = 2; i <= num; i++) {
	// 	if (checkIfPrime(i)) {
	// 		total += i;
	// 		console.log("i=");
	// 		console.log(i);
	// 	}
	// }
	// return total;
}

// console.log(sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

//Solution 1: arguments, indexOf, filter
function seekAndDestroy(arr, ...rest) {
	return arr.filter((val) => !rest.includes(val));
}

// console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
	const aar1 = [];
	const arr2 = [];

	a.forEach((val, index) => {
		if (val === -1) {
			aar1.push(index);
		} else {
			arr2.push(val);
		}
	});

	const sortArr = arr2.sort((a, b) => a - b);

	aar1.forEach((val, i) => sortArr.splice(aar1[i], 0, -1));
	return sortArr;
}
const a = [-1, 150, 160, 170, -1, -1, 180, 190];
// console.log(sortByHeight(a));

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
	let compare = str.charCodeAt(0);
	let missing;

	str.split("").map((char, i) => {
		if (str.charCodeAt(i) === compare) {
			compare++;
		} else {
			missing = String.fromCharCode(compare);
		}
	});

	return missing;
}

// console.log(missingLetters("abce"));

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
	let sumOfEven = 0;
	let sumOfOdd = 0;
	arr.map((val, i) => (val % 2 === 0 ? (sumOfEven += val) : (sumOfOdd += val)));

	return [sumOfEven, sumOfOdd];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));
