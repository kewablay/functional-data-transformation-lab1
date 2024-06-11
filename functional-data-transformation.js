// 1.
// a. capitalize strings
const capitalize = (str) => {
  return str.toUpperCase();
};

console.log(capitalize("Hello kewa blay"));

// b. Reverse a string
const reverse = (str) => {
  return str.split("").reverse().join("");
};

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
        if(isNaN(parseInt(element))) return ;

        // else return it if its even 
        return parseInt(element) % 2 === 0
    })
}

console.log(filterEven(["a", 1, "b", 2, "c", 3, 8, 20, 35]));
