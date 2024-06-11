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


