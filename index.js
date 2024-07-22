// String transformation
// capitalize
const capitalize = function (string) {
    const word = string.trim();
    return word.replace(word[0], word[0].toUpperCase());
  };
  
  // reverse(str)
  const reverse = function (string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;
  };
  
  // isPalindrome(str)
  const isPalindrome = function (string) {
    if (typeof string !== 'string') return 'not a string';
  
    let start = 0;
    let end = string.length - 1;
  
    while (start < end) {
      if (string[start] !== string[end]) return false;
  
      start++;
      end--;
    }
  
    return true;
    
    // for (let i = 0; i < string.length; i++) {
    //   let start = i;
    //   let end = string.length - 1 - i;
  
    //   if (typeof string === "undefined") {
    //     console.log("undef");
    //   }
  
    //   if (string[start] !== string[end] || string === undefined) return false;
    //   if (start === end && string[start] === string[end]) return true;
    // }
  
    // return typeof string !== "string" && false;
    
  };
  
  // console.log('palindrome: ', isPalindrome('peep'))
  
  // wordCount(str);
  const wordCount = function (string) {
    const words = string.split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      count += 1;
    }
    return count;
  };
  
  // Array Transformation
  // double
  const array = [1, 2, 3, 4];
  const double = function (array) {
    return array.map((element) => element * 2);
  };
  
  // filterEven
  const filterEven = function (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        newArray.push(array[i]);
        continue;
      }
    }
    return newArray;
  };
  
  // sum(arr)
  const sum = function (array) {
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum;
  };
  
  // average(arr)
  const average = function (array) {
    let sum = array[0];
    let length = array.length;
  
    for (let i = 1; i < array.length; i++) {
      sum += array[i];
    }
  
    return sum / length;
  };
  
  // Object transformations
  // fullName(person)
  const fullName = function (person) {
    const { firstName, lastName } = person;
    return `${firstName} ${lastName}`;
  };
  
  // isAdult(person)
  const isAdult = function (person) {
    const { age } = person;
    if (age >= 18) {
      return true;
    }
    return false;
  };
  
  // filterByAge(people, minAge)
  const filterByAge = function (people, minAge = 18) {
    return people.filter((person) => person.age >= minAge);
  };
  
  // function composition
  const compose = function(...fns) {
    return function(initialValue) {
      return fns.reduceRight((accumulator, fn) => fn(accumulator), initialValue);
    }
  }
  
  module.exports = {
    capitalize,
    reverse,
    isPalindrome,
    wordCount,
    double,
    filterEven,
    sum,
    average,
    fullName,
    isAdult,
    filterByAge,
    compose
  }