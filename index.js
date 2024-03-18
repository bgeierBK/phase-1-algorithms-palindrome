function isPalindrome(word) {
//turn string into array
let splitWord = word.split("");
//reverse that array
let reverseArray = splitWord.reverse();
//join back into new string
let reverseWord = reverseArray.join("");

console.log(word)
console.log(reverseWord)

//compare the reversed string to the original string -- return true if they are the same
if (word === reverseWord){
  return true
}
//return false if they are not the same
else if (word !== reverseWord){
  return false
}
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  isPalindrome("gopher")

  console.log("expecting true");
  console.log(isPalindrome("abccba"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
