// 1.
// a. capitalize strings
const capitalize = (str) => {
  return str.toUpperCase();
};

console.log(capitalize("Hello kewa blay"));

// b. Reverse a string
function reverse(str) {
  let reversed = "";

  // Iterate through the string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    // Append each character to the reversed string
    reversed += str[i];
  }

  return reversed;
}

console.log(reverse("hello kewa blay"));

// c. Check if a string is a palindrome
const isPalindrome = (str) => {
  let isPalindrome = str === str.split("").reverse().join("");
  if (isPalindrome) {
    return "The input string is a palindrome. ";
  } else {
    return "The input string is not a palindrome.";
  }
};

console.log(isPalindrome("madam"));

// d. Word count - Counts the number of words in a string

const wordCount = (str) => {
  let count = str.split(" ").length();
  return "The number of words in the stirng is: ", count;
};

// 2.
// a. Double array - doubles every number in an array

const doubleArray = (arr) => {
  return arr.map((element) => {
    // if element is a not a number return the element
    if (isNaN(parseInt(element))) return element;

    // else double the number
    return parseInt(element) * 2;
  });
};

console.log(doubleArray(["a", 1, "b", 2, "c", 3]));

// b. Filter Even - filters out even numbers in an array

const filterEven = (arr) => {
  return arr.filter((element) => {
    // if element is not a number immediately return
    if (isNaN(parseInt(element))) return;

    // else return it if its even
    return parseInt(element) % 2 === 0;
  });
};

console.log(filterEven(["a", 1, "b", 2, "c", 3, 8, 20, 35]));

// c. Sum array - Calculates the sum of all elements in an array

const sum = (arr) => {
  let finalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // If its not a number pass
    if (isNaN(parseInt(arr[i]))) continue;
    finalSum += parseInt(arr[i]);
  }

  return finalSum;
};

// console.log(sum(["a", 1, "b", 2, "c", 3, 8, 20, 35]));
console.log(sum([2, 3, 50, 10]));

// d. average(arr) - calculate the average of all numbers in an array

function average(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if the element is a number
    if (!isNaN(parseFloat(arr[i]))) {
      // Convert the element to a number and add it to the sum
      sum += parseFloat(arr[i]);
      count++; // Increment the count of valid numbers
    }
  }

  // Calculate the average
  if (count > 0) {
    return sum / count;
  } else {
    return 0; // Return 0 if no valid numbers were found
  }
}
