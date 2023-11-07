// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
	// SOLUTION 1 - Return a single longest word
	// SOLUTION 2 - Return an array and include multiple words if they have the same length
	// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  //My trial solution - pranali
	// let longestLength = 0;
	// let longestWord = "";
  // const withoutCommas = sen.replaceAll(',', "")
	// withoutCommas.split(" ").forEach((word) => {
	// 	if (word.length > longestLength) {
	// 		longestLength = word.length;
	// 		console.log(word.length);
	// 	}
	// });

  // let arrOfLargestWords = []

	// const arr = withoutCommas.split(" ").forEach((word) => {
	// 	if (word.length === longestLength) {
	// 		console.log(word);
  //     arrOfLargestWords.push(word)
	// 		return arrOfLargestWords;
	// 	}
	// });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //create filtered array
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  //Sort by length
  const sorted  = wordArr.sort(function(a,b){
    return b.length - a.length;
  })

  //if multiple words then put into array
  const longestWordsInArray = sorted.filter(function(word){
    return word.length === sorted[0].length;
  });

  //check if more than one array value
  if(longestWordsInArray.length === 1) {
    return longestWordsInArray[0]
  } else {
    return longestWordsInArray
  }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // // SOLUTION 1
  // // Init chunked array
  // const chunkedArray = [];

  // // Set index
  // let i = 0;

  // // Loop while the index is less than the array length
  // while (i < arr.length ) {
  //   // Slice out from the index to the index  + the chunk length and push on to the chunked array
  //   chunkedArray.push(arr.slice(i, i+len))
  //   i += len; 
  // }

  // return chunkedArray;

  // SOLUTION 2
  //Init chunked array
  const chunkedArray = [];

  // Loop through arr
  arr.forEach(function(val){
    //Get the last element
    const last = chunkedArray[chunkedArray.length - 1]

    if(!last || last.length === len) {
      chunkedArray.push([val])
    } else {
      last.push(val)
    }

  });

  return chunkedArray
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // return arrays.reduce(function(a,b) {
  //   return a.concat(b);
  // })

  // SOLUTION 2
  // return [].concat.apply([], arrays)

  //SOLUTION 3
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2)
}

//helper function
function formatStr(str) {
  return str 
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('')
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newString = str.toLowerCase().replace(/[a-z]/gi, function(char){
    if(char === 'z' || char === "Z") {
        return 'a'
    } else {
      return String.fromCharCode(char.charCodeAt()+1)
    }
  })

  newString = newString.replace(/a|e|i|o|u/gi, function(vowel) {
    return vowel.toUpperCase()
  })

  return newString
}

// Call Function
const output = letterChanges('Hello therez');

console.log(output);
