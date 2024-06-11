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
function isPalindrome(str) {
    // Define pointers for the start and end of the string
    let start = 0;
    let end = str.length - 1;
    
    // Iterate until the pointers meet
    while (start < end) {
        // If characters at the start and end are not equal, it's not a palindrome
        if (str[start] !== str[end]) {
            return false;
        }
        // Move pointers towards each other
        start++;
        end--;
    }
    
    // If the loop completes, it's a palindrome
    return true;
}

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









// 3.
// b. fullName(person) : returns the full name of a person object given 

function fullName(person) {
    return person.firstName + ' ' + person.lastName;
}

// Test case
const person = { firstName: "John", lastName: "Doe" };



// c. isAdult(person): Checks if a person is 18 or older (given property age).

function isAdult(person) {
    return person.age >= 18;
}

// Test case
const person1 = { age: 20 };
const person2 = { age: 15 };
console.log(isAdult(person1)); 
console.log(isAdult(person2)); 



// d. filterByAge(people, minAge): Filters an array of person objects to keep
// only those at least minAge years old.

function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge);
}

// Test case
const people = [
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 18 },
    { name: "Emma", age: 22 }
];
const minAge = 20;
console.log(filterByAge(people, minAge));
// Output: [{ name: "John", age: 25 }, { name: "Alice", age: 30 }, { name: "Emma", age: 22 }]









// 4. 

// Compose function
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to capitalize a string
function capitalizeString(str) {
    return str.toUpperCase();
}

// Function to double all the even numbers in an array
function doubleEvenNumbers(arr) {
    return arr.map(num => num % 2 === 0 ? num * 2 : num);
}


// Compose reverseString and capitalizeString
const reverseAndCapitalize = compose(reverseString, capitalizeString);

// Compose reverseString and doubleEvenNumbers
const reverseAndDoubleEven = compose(reverseString, doubleEvenNumbers);

// Test cases
console.log(reverseAndCapitalize("hello")); // Output: "OLLEH"
console.log(reverseAndDoubleEven([1, 2, 3, 4, 5])); // Output: [10, 6, 3, 8, 1]
