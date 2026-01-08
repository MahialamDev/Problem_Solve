// Problem 01
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example
// console.log(reverseString("Mahialam")); // olleh


// Problem 02
function countVowels(word) {
  let count = 0;
  const convertWord = word.toLowerCase();
  let vowels = "aeiou";
  
  for (let i = 0; i < word.length; i++){
    if (vowels.includes(convertWord[i])) {
      count++;
    }

  }

  return count;
}

// console.log(countVowels("Jamalpurei"))



// Problem 03

function palindrom (word) {
  let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  let ot = cleanWord.split('').reverse().join('');

  if (ot === cleanWord) {
    return true;
  } else {
    return false;
  }

}

// console.log(palindrom("level"))




// Problem 04
function findMax(array) {

  let max = array[0];

  for (let i = 0; array.length > i; i++ ) {
    if (array[i] > max) {
        max = array[i]
    }
  }


  return max;
}

// console.log(findMax([4,8,9,2,80]))



// Problem 05

function removeDuplicate(array) {
  let nonDuplicate = [];

  for (let i = 0; array.length > i; i++){
    if(!nonDuplicate.includes(array[i]))
    nonDuplicate.push(array[i])
  }

  return nonDuplicate;
  
}

// console.log(removeDuplicate([1, 1, 5, 2, 3, 4, 5, 6, 6, 6]));



// Problem 06

function sumOfArray(array) {
  
  let sum = 0;

  for (let i = 0; array.length > i; i++){
    sum = array[i] + sum;
  }


  return sum;
}

// console.log(sumOfArray([1,2,3,4,5,20]))


// Problem 7: Find Even Numbers in an Array

function findEven(array) {
  let evenNumbers = [];

  for (let i = 0; array.length > i; i++){
    const even = array[i] % 2;

    if (even === 0) {
      evenNumbers.push(array[i])
    }
  }

    
  return evenNumbers;
}

console.log(findEven([2, 5, 7, 10, 15, 30]))
