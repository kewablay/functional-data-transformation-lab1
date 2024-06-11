// 1.
// a. capitalize strings
const capitalize = (str) => {
    return str.toUpperCase();
  };
  
  console.log(capitalize("Hello kewa blay"))


// b. Reverse a string
const reverse = (str) => {
    return str.split("").reverse().join("")
}

console.log(reverse("hello kewa blay"))

// c. Check if a string is a palindrome
const isPalindrome = (str) => {
    let isPalindrome =  str === str.split("").reverse().join("")
    if(isPalindrome) {
        return "The input string is a palindrome. "
    } else {
        return "The input string is not a palindrome."
    }
}

console.log(isPalindrome("madam"))


// d. Word count - Counts the number of words in a string 

const wordCount = (str) => {
    let count =  str.split(" ").length()
    return "The number of words in the stirng is: ", count
}
